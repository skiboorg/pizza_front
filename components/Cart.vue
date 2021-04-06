<template>
  <!--  https://rus-serial.net/russkie-serialy/419-mazhor-1-sezon.html-->
  <div class="cart " :class="[cartHeader ? 'cartHeader':'',cartHeaderActive && $route.path !=='/cart' ? 'cartHeaderActive':'' ]">
    <div v-if="items_in_cart > 0" class="cart__wrapper">
      <div class="cart-items">

        <div class="cart-item__constructor"
             v-for="constructor in this.$store.getters['cart/getCart'].pizza_constructors"
             :key="constructor.id">
          <div class="cart-item">
            <div class="cart-item__constructor--img">
              <div class="cart-item__constructor--img-first"
                   :style="`background: url(${constructor.items[0].image})`"></div>
              <div class="cart-item__constructor--img-second"
                   :style="`background: url(${constructor.items[1].image})`"></div>
            </div>
            <p @click="deleteConstructor(constructor)" :class="{'isDisabled':serverAction}" class="cart-item__remove"><i class="el-icon-delete"></i></p>
            <div class="cart-item__info">
              <div class="">
                <p class="cart-item__info--name">Пицца из половинок
                  {{constructor.items[0].name}} + {{constructor.items[1].name}}
                </p>
                <p class="cart-item__info--text">
                  {{constructor.quantity}} шт
                </p>
              </div>
              <div class="cart-item__info--add">
                <img @click="minusConstructor(constructor)" :class="{'isDisabled':serverAction}" src="/round-minus.svg" alt="">
                <p>1 шт</p>
                <img @click="plusConstructor(constructor)" :class="{'isDisabled':serverAction}" src="/round-plus.svg" alt="">
              </div>
            </div>
            <div class="cart-item__price">
              <p v-if="$auth.loggedIn" class="cart-item__price--bonus">+ {{constructor.bonuses}} баллов</p>
              <p class="cart-item__price--summ">{{constructor.price}} р</p>
            </div>
          </div>
        </div><!-- construstors-->


        <div class="cart-item"
             v-for="cart_item in this.$store.getters['cart/getCart'].items"
             :key="cart_item.id">

          <img :src="cart_item.item.image" alt="">
          <p v-if="!cart_item.item.is_gift" @click="deleteUnit(cart_item)" :class="{'isDisabled':serverAction}" class="cart-item__remove"><i class="el-icon-delete"></i></p>
          <div class="cart-item__info">
            <div class="">
              <p class="cart-item__info--name">{{cart_item.item.name}}</p>
              <p class="cart-item__info--text">
                <span v-if="cart_item.selected_size > 0">{{cart_item.quantity * cart_item.item.min_unit}} {{cart_item.item.unit_name}} {{cart_item.selected_size}} см</span>
                <!--            <span v-else-if="cart_item.item.category.is_meat">{{cart_item.quantity * cart_item.item.min_unit}}</span>-->
                <span v-else>{{cart_item.quantity * cart_item.item.min_unit}} {{cart_item.item.unit_name}} </span>
              </p>
            </div>
            <div v-if="!cart_item.item.is_gift" class="cart-item__info--add">
              <img @click="minusUnit(cart_item)" :class="{'isDisabled':serverAction}" src="/round-minus.svg" alt="">
              <p>{{cart_item.item.min_unit}} {{cart_item.item.unit_name}}</p>
              <img @click="plusUnit(cart_item)" :class="{'isDisabled':serverAction}" src="/round-plus.svg" alt="">
            </div>
          </div>
          <div class="cart-item__price">
            <p v-if="$auth.loggedIn" class="cart-item__price--bonus">+ {{cart_item.bonuses}} баллов</p>
            <p class="cart-item__price--summ">{{cart_item.price}} р</p>
          </div>
        </div><!-- items-->
        <div class="cart-item"
             v-for="souse in this.$store.getters['cart/getCart'].souces"
             :key="souse.id">
          <img :src="souse.item.image" alt="">
          <p @click="deleteSouse(souse)" :class="{'isDisabled':serverAction}" class="cart-item__remove"><i class="el-icon-delete"></i></p>
          <div class="cart-item__info">
            <div class="">
              <p class="cart-item__info--name">{{souse.item.name}}</p>
              <p class="cart-item__info--text">
                <span >{{souse.quantity }} шт </span>
              </p>
            </div>
            <div class="cart-item__info--add">
              <img @click="minusSouse(souse)" :class="{'isDisabled':serverAction}" src="/round-minus.svg" alt="">
              <p>1 шт</p>
              <img @click="plusSouse(souse)" :class="{'isDisabled':serverAction}" src="/round-plus.svg" alt="">
            </div>
          </div>
          <div class="cart-item__price">
            <p v-if="$auth.loggedIn" class="cart-item__price--bonus">+ {{souse.bonuses}} баллов</p>
            <p class="cart-item__price--summ">{{souse.price}} р</p>
          </div>
        </div><!-- souses-->

      </div>
      <div v-if="cartHeader" class="cart__clear">
        <p>Очистить корзину</p>
        <p @click="clearCart" class="cart__clear--icon" :class="{'isDisabled':serverAction}"> <i class="el-icon-delete"></i></p>
      </div>

      <div v-if="!cartHeader">
        <div v-if="is_meat_in_cart > 0 " class="cart__add-block">
        <p class="cart__title">Рекомендуем к шашлыку</p>
        <div class="cart__add-list">
          <p @click="addToCart(item)"
             v-if="item.is_for_meat"

             v-for="item in this.$store.getters['products/getItems']" :key="item.id">

            {{item.name}} ({{item.min_unit}} {{item.unit_name}}) - {{item.prices.find(x => x.city === $auth.$storage.getCookie('city_id')).price}}р
          </p>
        </div>
      </div>
         <div  class="cart__add-block">
          <p class="cart__title">Соусы</p>
          <client-only>
            <swiper style="height: 80px;"  class="cart-souse__slider" :options="soucesSliderOption">
              <swiper-slide v-for="souse in souses" :key="souse.id">
                <div @click="addSouseToCart(souse)" class="cart-recommended__slider-item">
                  <img :src="souse.image" alt="" data-not-lazy>
                  <div class="">
                    <p class="font-12">{{souse.name}}</p>
                    <p class="text-bold">{{souse.prices.find(x => x.city === $auth.$storage.getCookie('city_id')).price}}р</p>
                  </div>
                </div>
              </swiper-slide>

              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </client-only>
        </div>
        <div  class="cart__add-block">
          <p class="cart__title">Рекомендуем к заказу</p>

          <client-only>
            <swiper style="height: 100px" ref="recommendedSlider"  class="cart-recommended__slider" :options="recommendedSliderOption">

                <swiper-slide
                              v-for="item in  recommended_items" :key="item.id">

                  <div @click="addToCart(item)" class="cart-recommended__slider-item">
                    <img :src="item.image" alt="" data-not-lazy>
                    <div class="">
                      <p class="font-12">{{item.name}}</p>
                      <p class="text-bold">{{item.prices.find(x => x.city === $auth.$storage.getCookie('city_id')).price}}р</p>
                    </div>
                  </div>
                </swiper-slide>

              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </client-only>
        </div>
        <div class="cart__persons">
        <p>Количество персон</p>
        <div class="cart-item__info--add">
              <img @click="delPerson" :class="{'isDisabled':serverAction}" src="/round-minus.svg" alt="">
              <p>{{this.$store.getters['cart/getCart'].persons}}</p>
              <img @click="addPerson" :class="{'isDisabled':serverAction}" src="/round-plus.svg" alt="">
            </div>
      </div>
      </div>



      <div v-if="cartHeader" class="cart__total">
        <div class="cart__total-row">
          <p class="cart__title">Сумма</p>
          <p class="cart__total-number">{{this.$store.getters['cart/getCart'].total_price}}р</p>
        </div>
        <div v-if="$auth.loggedIn" class="cart__total-row">
          <p class="cart__title">Начислено баллов</p>
          <p class="cart__total-number">{{this.$store.getters['cart/getCart'].total_bonuses}}</p>
        </div>
        <el-button type="primary" @click="openCartPage">Оформить заказ</el-button>
      </div>
      <div v-else class="cart__total mb-50">
        <div v-if="$auth.loggedIn">
           <p class="cart__title mb-10">Баллов будет начислено: {{this.$store.getters['cart/getCart'].total_bonuses}}</p>
          <el-checkbox class="mb-30" v-model="with_bonuses">Списать баллы ({{$auth.user.bonuses}} баллов доступно) </el-checkbox>
        </div>

        <p v-if="$auth.loggedIn" class="cart__title">Введите промокод</p>
        <div class="cart__total-row">
          <div v-if="$auth.loggedIn" class="cart__total-promo">
            <el-input :disabled="$auth.user.promo" :placeholder="$auth.user.promo ? 'Промокод уже был введен ранее' : 'Промокод'"
                      class="in-edit-mode"  v-model="promoCode"></el-input>
             <el-button :disabled="$auth.user.promo" type="primary" @click="usePromo">Использовать</el-button>
          </div>
          <p class="cart__title">ИТОГО: {{this.$store.getters['cart/getCart'].total_price - used_bonuses - used_promo}}р


          </p>
        </div>
        <div class="cart__total-row">
           <el-button  plain @click="$router.push('/')">Вернуться в меню</el-button>
           <el-button  type="primary" @click="openCheckoutPage">Оформить заказ</el-button>
        </div>


      </div>

    </div>
    <div v-else class="cart__wrapper cart__empty" >
      <img rel="prefetch" class="cart__empty--img" src="/empty_cart.png" alt="" data-not-lazy>
      <p class="cart__empty--text mb-50">В корзине пусто</p>
      <div v-if="!cartHeader" class="text-center mb-50">
        <el-button  type="primary" @click="$router.push('/')">На главную</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['recommended_items_count','souses_items_count','cartHeader','cartHeaderActive'],

  data() {
    return {
      selectedAddress:1,
      serverAction:false,
      promoCode:null,
      with_bonuses: this.$store.getters['cart/getCartBonuses'] > 0,
      recommendedSliderOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 50
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          900: {
            slidesPerView: 4,
          }
        }
      },
      soucesSliderOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 50
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 50
          },
          900: {
            slidesPerView: 4,
          }
        }
      }
    };
  },
  methods:{
    openCartPage(){
      this.$fb.track('InitiateCheckout',{
      value: this.$store.getters['cart/getCart'].total_price,
      currency: 'RUB',
      })
      this.$router.push('/cart')
    },
    openCheckoutPage(){
      this.$fb.track('Lead')
      this.$router.push('/checkout')

    },
    async addPerson (item) {
      this.serverAction = true
      await this.$axios.post(`/api/cart/add_person`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async delPerson (item) {
      this.serverAction = true
      await this.$axios.post(`/api/cart/del_person`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },


    async addToCart (item) {
      this.serverAction = true
      await this.$axios.post(`/api/cart/add_to_cart`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          item:item,
          selected_size:0,
          weight:0,
          units:1,
          city_id:this.$auth.$storage.getCookie('city_id'),
          is_meat: false
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async addSouseToCart (item) {
      this.serverAction = true
      await this.$axios.post(`/api/cart/add_to_cart_souse`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          item_id:item.id,
          city_id:this.$auth.$storage.getCookie('city_id')
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async clearCart () {
      this.serverAction = true
      await this.$axios.post(`api/cart/erase_cart/${this.$auth.$storage.getCookie('session_id')}`)
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async deleteSouse (souse){
      this.serverAction = true
      await this.$axios.post(`/api/cart/delete_cart_souse`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          code:souse.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async deleteUnit (cart_item){
      this.serverAction = true
      await this.$axios.post(`/api/cart/delete_item`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          code:cart_item.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async deleteConstructor (constructor){
      this.serverAction = true
      await this.$axios.post(`/api/cart/delete_cart_constructor`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          code:constructor.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async plusUnit (cart_item){
      this.serverAction = true
      await this.$axios.post(`/api/cart/add_item_quantity`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          code:cart_item.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async minusUnit (cart_item){
      this.serverAction = true
      await this.$axios.post(`/api/cart/remove_item_quantity`,
        {
          code:cart_item.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async plusConstructor (constructor){
      this.serverAction = true
      await this.$axios.post(`/api/cart/add_constructor_quantity`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          code:constructor.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async minusConstructor (constructor){
      this.serverAction = true
      await this.$axios.post(`/api/cart/remove_constructor_quantity`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          code:constructor.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async plusSouse (souse){
      this.serverAction = true
      await this.$axios.post(`/api/cart/add_souse_quantity`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          code:souse.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async minusSouse (souse){
      this.serverAction = true
      await this.$axios.post(`/api/cart/remove_souse_quantity`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          code:souse.code
        })
      await this.$store.dispatch('cart/fetchCart')
      this.serverAction = false
    },
    async usePromo (){
      this.serverAction = true
      const responce = await this.$axios.post(`/api/user/use_promo`,
        {
          code:this.promoCode,
        })
      console.log()
      if (!responce.data.status){
        this.notify('Ошибка','Промокод не найден','error')
      }else {
         this.notify('Успешно','Промокод применен','success')
        this.$auth.fetchUser()
        this.$store.dispatch('cart/addPromo', responce.data.discount)
      }
      this.serverAction = false
    },
     notify(title,message,type){
      this.$notify({
        title: title,
        message: message,
        type: type
      });
    },
  },
  computed:{
    used_bonuses (){
      return this.$store.getters['cart/getCartBonuses']
    },
    used_promo (){
      return this.$store.getters['cart/getCartPromo']
    },
    is_meat_in_cart () {
      return this.$store.getters['cart/getCart'].items.filter( x=> x.item.category.is_meat).length
    },
    recommended_items () {
      return  this.$store.getters['products/getRecommendedItems']
    },
    souses () {
      return  this.$store.getters['products/getSouses']
    },
    items_in_cart () {
      return this.$store.getters['cart/getCart'].items.length +
        this.$store.getters['cart/getCart'].souces.length +
        this.$store.getters['cart/getCart'].pizza_constructors.length
    }
  },
  watch:{
    with_bonuses(val){
      if(val){
        this.$store.dispatch('cart/addBonuses', this.$auth.user.bonuses)
      }else
        this.$store.dispatch('cart/addBonuses', 0)
    }
  }
}
</script>


