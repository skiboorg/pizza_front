<template>
  <div class="checkout-container">
    <h1 class="home-page-category__title">{{!orderPlaced ? 'Оформление заказа':'Оформление заказа завершено'}}</h1>
    <div v-if="!orderPlaced" >
      <div v-if="items_in_cart > 0" class="checkout-wrapper">
      <div class="checkout-left">
        <h3 class="font-20 text-bold mb-10" >Доставка</h3>
        <el-radio-group v-model="orderData.delivery_type" class="mb-30">
          <el-radio-button label="Курьером"></el-radio-button>
          <el-radio-button label="Самовывоз"></el-radio-button>
        </el-radio-group>
        <div v-if="orderData.delivery_type==='Курьером'" class="checkout-form">

          <el-input class="in-edit-mode mb-10" v-model="orderData.name" placeholder="Ваше имя *"></el-input>

          <el-input class="in-edit-mode mb-10" v-model="orderData.phone" placeholder="Телефон *"></el-input>

          <el-checkbox class="mb-10" v-model="orderData.need_callback">Перезвоните мне для уточнения деталей заказа</el-checkbox>
          <div class="checkout-form__group group-3-1">
            <el-input class="in-edit-mode " v-model="orderData.street" placeholder="Улица *"></el-input>
            <el-input class="in-edit-mode " v-model="orderData.house" placeholder="Дом *"></el-input>
          </div>
          <div class="checkout-form__group group-4">
            <el-input class="in-edit-mode " v-model="orderData.flat" placeholder="Кв"></el-input>
            <el-input class="in-edit-mode " v-model="orderData.podezd" placeholder="Подъезд"></el-input>
            <el-input class="in-edit-mode " v-model="orderData.code" placeholder="Код двери"></el-input>
            <el-input class="in-edit-mode " v-model="orderData.floor" placeholder="Этаж"></el-input>
          </div>
          <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}"
                    placeholder="Комментарий к заказу" v-model="orderData.comment"></el-input>
        </div>
        <div v-else class="checkout-form">
          <h3 class="font-20 text-bold mb-10">Адрес кафе</h3>
          <p class="mb-20">{{currentCity.address}}</p>
          <el-radio-group v-model="orderData.cafe_address" class="mb-30">
          <el-radio :label="address.address" v-for="address in currentCity.adresses" :key="address.id"></el-radio>
        </el-radio-group>
          <div class="checkout-map">
               <client-only>
        <yandex-map
          :coords="coordinates"
          class="mb-35"
          :class="'ymapContanerHidden'"
          zoom="14"
          style="width: 100%; height: 100%; padding: 0"
          :cluster-options="{ 1: {clusterDisableClickZoom: true} }"
          :controls="['trafficControl']"
          map-type="map">
          <ymap-marker
            markerId="1"
            marker-type="Placemark"
            :coords="coordinates">
          </ymap-marker>
        </yandex-map>
      </client-only>
          </div>


          <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}"
                    placeholder="Комментарий к заказу" v-model="orderData.comment"></el-input>
        </div>
        <h3 class="font-20 text-bold mb-10" >Когда доставить?</h3>
        <div class="checkout-form__group group-2 mb-30">
          <el-date-picker v-if="orderData.delivery_type==='Курьером'" class="in-edit-mode "  v-model="orderData.date"
                          format="dd/MM/yyyy" value-format="yyyy-MM-dd"

                          type="date"  placeholder="Выберите дату" :picker-options="dateOptions">
          </el-date-picker>
          <el-time-select class="in-edit-mode " placeholder="Выберите время" v-model="orderData.time"
                          :picker-options="{ start: '09:30',  step: '00:30', end: '20:00'}">
          </el-time-select>
        </div>
        <p class="mb-30">{{orderData.delivery_type==='Курьером' ? 'Доставка в районе 30 минут' : 'Заказ можно будет забрать примерно через 40 минут'}}</p>
        <h3 class="font-20 text-bold mb-10" >Оплата</h3>
        <div class="checkout__payment">
          <el-radio v-model="orderData.payment" label="cash" border>Наличными курьеру</el-radio>

        <div :class="{'hidden':orderData.payment!=='cash'}" class="checkout__cashback">
           <p>С какой суммы подготовить сдачу?</p>
            <el-input class="in-edit-mode " v-model="orderData.cashback" suffix-icon="el-icon-money"></el-input>
           <el-checkbox class="mb-10" v-model="orderData.no_cashback">Без сдачи</el-checkbox>
        </div>
         <el-radio v-model="orderData.payment" label="online" border>Онлайн на сайте</el-radio>
         <el-radio v-model="orderData.payment" label="courier_card" border>Картой курьеру</el-radio>
        </div>

        <el-button type="primary" @click="createOrder">Подтвердить заказ на
          {{this.$store.getters['cart/getCart'].total_price - used_bonuses - used_promo}}р
        </el-button>
        <p class="font-12">Нажимая на кнопку, вы даете согласие на обработку персональных данных</p>
      </div>
      <div class="checkout-right">
        <div class="checkout-cart">
          <div @click="$router.push('/cart')" class="checkout-cart__change">
            <p>Изменить состав корзины</p>
            <p><i class="el-icon-edit"></i></p>
          </div>
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
           <div class="cart-item__info">
              <div class="">
                <p class="cart-item__info--name">Пицца из половинок
                  {{constructor.items[0].name}} + {{constructor.items[1].name}}
                </p>
                <p class="cart-item__info--text">
                  {{constructor.quantity}} шт
                </p>
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
        <div class="cart-item__info">
            <div class="">
              <p class="cart-item__info--name">{{cart_item.item.name}}</p>
              <p class="cart-item__info--text">
                <span v-if="cart_item.selected_size > 0">{{cart_item.quantity * cart_item.item.min_unit}} {{cart_item.item.unit_name}} {{cart_item.selected_size}} см</span>
                <!--            <span v-else-if="cart_item.item.category.is_meat">{{cart_item.quantity * cart_item.item.min_unit}}</span>-->
                <span v-else>{{cart_item.quantity * cart_item.item.min_unit}} {{cart_item.item.unit_name}} </span>
              </p>
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
         <div class="cart-item__info">
            <div class="">
              <p class="cart-item__info--name">{{souse.item.name}}</p>
              <p class="cart-item__info--text">
                <span >{{souse.quantity }} шт </span>
              </p>
            </div>

          </div>
          <div class="cart-item__price">
            <p v-if="$auth.loggedIn" class="cart-item__price--bonus">+ {{souse.bonuses}} баллов</p>
            <p class="cart-item__price--summ">{{souse.price}} р</p>
          </div>
        </div><!-- souses-->

      </div>
          <div class="checkout-cart__row">
            <p>Кол-во персон</p>
            <p>{{this.$store.getters['cart/getCart'].persons}}</p>
          </div>
          <div class="checkout-cart__row">
            <p>Сумма</p>
            <p class="text-bold">{{this.$store.getters['cart/getCart'].total_price}}р
              <span v-if="used_bonuses"><br>- {{used_bonuses}}р (баллы)</span>
              <span v-if="used_promo"><br>- {{used_promo}}р (промокод)</span>
              <span v-if="used_promo || used_bonuses"><br> К оплате: {{this.$store.getters['cart/getCart'].total_price - used_bonuses - used_promo}} р</span>
            </p>
          </div>
        </div>
      </div>
    </div>
      <div v-else class="cart__wrapper cart__empty" >
      <img rel="prefetch" class="cart__empty--img" src="/empty_cart.png" alt="" data-not-lazy>
      <p class="cart__empty--text mb-50">В корзине пусто</p>
      <div class="text-center mb-50">
        <el-button  type="primary" @click="$router.push('/')">На главную</el-button>
      </div>
    </div>
    </div>
    <div v-else class="checkout__new-order">
      <p>Номер заказа {{orderCode}}</p>
    </div>

  </div>
</template>

<script>


export default {
  async fetch({store}){
    await store.dispatch('city/fetchCity')
    await store.dispatch('cart/fetchCart')
  },

  scrollToTop: true,
  // auth: true,
  data() {
    return {
      orderPlaced:false,
      orderCode:null,
      currentCity:{},
      orderData:{
        delivery_type:'Курьером',
        cafe_address:null,
        payment:'cash',
        need_callback:false,
        no_cashback:true,
        comment:null,
        cashback:0,
         name: this.$auth.loggedIn ? this.$auth.user.fio : null,
        phone: this.$auth.loggedIn ? this.$auth.user.phone : null,
        street:null,
          house:null,
          flat:null,
          podezd:null,
          code:null,
          floor:null,
        date:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
        time:'08:00',
      },

      dateOptions: {
        disabledDate(time) {
          return (time.getTime() + 3600 * 1000 * 24) < Date.now();
        }

      },
    };
  },
  watch: {
  },
  mounted() {
  this.currentCity = this.$store.getters['city/getCity'].find(x => x.id === this.$auth.$storage.getCookie('city_id'))
    this.orderData.cafe_address = this.currentCity.adresses[0].address

  },
  methods: {
    async createOrder(){
      const response = await this.$axios.post('/api/order/new_order',
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          data:this.orderData,
          bonuses:this.used_bonuses,
          promo:this.used_promo,
          source:'site'
        })
      console.log(response.data)
      await this.$store.dispatch('cart/fetchCart')
//       this.$fb.track('Purchase',{
//
// value: 0,
// currency: 'RUB',
// contents: [
// {
// id: 0,
//
// quantity: количество
// content_ids: 'переменную, подтягивающую найди контента',
//       })
      if (response.data.formUrl){
        console.log('redirect ',response.data.formUrl)
        window.location.href = response.data.formUrl
      }
      this.orderCode = response.data.code
      this.orderPlaced = false
      this.$auth.loggedIn ?  this.$auth.fetchUser() : null
    }
  },
  computed:{
      items_in_cart () {
      return this.$store.getters['cart/getCart'].items.length +
        this.$store.getters['cart/getCart'].souces.length +
        this.$store.getters['cart/getCart'].pizza_constructors.length
    },
    used_bonuses (){
      return this.$store.getters['cart/getCartBonuses']
    },
    used_promo (){
      return this.$store.getters['cart/getCartPromo']
    },
    coordinates () {
        return this.currentCity.adresses.find(x => x.address === this.orderData.cafe_address).coordinates.split(',')
    }

  }
}
</script>


