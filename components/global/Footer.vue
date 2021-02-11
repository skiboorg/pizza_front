<template>
  <div>
    <footer class="footer">
      <div class="container footer-wrapper">
        <div class="footer-row">
          <div class="footer-logo mb-20">
            <img src="/logo_big.svg" alt="">
          </div>
          <p class="mb-20">Новый Уренгой,<br> ул.Железнодорожная д.12</p>
          <p ><a href="tel:89095483434">89095483434</a></p>
          <p class="color-primary c-pointer">Обратный звонок</p>
        </div>
        <div class="footer-row">
          <ul>
            <li class="footer-link" v-for="link in navLinks" :key="link.id"><nuxt-link :to="link.url" >{{link.name}}</nuxt-link></li>
          </ul>
        </div>
        <div class="footer-row">
          <p class="mb-25">Связаться с нами </p>
          <div class="header-mobile-menu__social mb-25">
            <a href="#"><img src="/vk-icon.svg" alt=""></a>
            <a href="#"><img src="/inst-icon.svg" alt=""></a>
            <a href="#"><img src="/whatsapp-icon.svg" alt=""></a>
          </div>
          <div class="header-mobile-menu__apps">
            <div class="header-mobile-menu__app">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2609 15.0026L2.19565 29.5094C1.49016 29.0273 1.0713 28.2253 1.07871 27.3709V2.63427C1.0713 1.77983 1.49016 0.977863 2.19565 0.495728L17.2609 15.0026Z" fill="#2196F3"/>
                <path d="M22.5326 9.93547L17.2611 15.0026L2.1958 0.495798C2.25256 0.451805 2.31169 0.410877 2.37286 0.373205C3.16908 -0.109378 4.16361 -0.124957 4.97458 0.332341L22.5326 9.93547Z" fill="#4CAF50"/>
                <path d="M28.9212 15.0026C28.931 15.9672 28.4069 16.8582 27.5591 17.3183L22.5327 20.0698L17.2612 15.0026L22.5327 9.93542L27.5591 12.6869C28.4069 13.147 28.931 14.038 28.9212 15.0026Z" fill="#FFC107"/>
                <path d="M22.5326 20.0697L4.97458 29.6729C4.16182 30.1231 3.17105 30.1075 2.37286 29.632C2.31169 29.5943 2.25256 29.5534 2.1958 29.5094L17.2612 15.0026L22.5326 20.0697Z" fill="#F44336"/>
              </svg>
              <p>Доступно в Google Play</p>
            </div>
            <div class="header-mobile-menu__app">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.8477 30H6.15234C2.75994 30 0 27.2401 0 23.8477V6.15234C0 2.75994 2.75994 0 6.15234 0H23.8477C27.2401 0 30 2.75994 30 6.15234V23.8477C30 27.2401 27.2401 30 23.8477 30Z" fill="#00C3FF"/>
                <path d="M23.8477 0H15V30H23.8477C27.2401 30 30 27.2401 30 23.8477V6.15234C30 2.75994 27.2401 0 23.8477 0Z" fill="#00AAF0"/>
                <path d="M9.23708 23.1161C8.96608 23.5855 8.47266 23.8482 7.966 23.8482C7.71762 23.8482 7.46614 23.7851 7.23604 23.6523C6.53655 23.2485 6.29602 22.3508 6.69985 21.6513L6.98796 21.1523H10.3709L9.23708 23.1161Z" fill="white"/>
                <path d="M6.47461 19.9804C5.66689 19.9804 5.00977 19.3233 5.00977 18.5156C5.00977 17.7079 5.66689 17.0507 6.47461 17.0507H9.35613L13.3085 10.205L12.2374 8.34968C11.8335 7.65018 12.074 6.75253 12.7735 6.34864H12.7736C13.473 5.94481 14.3707 6.1854 14.7745 6.88483L15 7.27536L15.2255 6.88489C15.6295 6.18534 16.5271 5.94487 17.2264 6.3487C17.5653 6.54434 17.8077 6.86022 17.9089 7.23815C18.0103 7.61608 17.9582 8.01089 17.7626 8.34974L12.739 17.0507H15.9077L17.5992 19.9804H6.47461Z" fill="white"/>
                <path d="M23.5256 19.9806H22.3355L23.3002 21.6514C23.704 22.3508 23.4635 23.2484 22.7641 23.6523C22.5383 23.7826 22.2878 23.8493 22.0339 23.8493C21.9067 23.8493 21.7787 23.8326 21.6524 23.7987C21.2745 23.6974 20.9586 23.455 20.7629 23.1161L15.6768 14.3066L17.3682 11.377L20.6441 17.0509H23.5256C24.3333 17.0509 24.9905 17.708 24.9905 18.5157C24.9905 19.3234 24.3333 19.9806 23.5256 19.9806Z" fill="#F2F2F2"/>
                <path d="M15 17.0508V19.9805H17.5992L15.9078 17.0508H15Z" fill="#F2F2F2"/>
                <path d="M17.9089 7.23813C17.8076 6.8602 17.5653 6.54426 17.2264 6.34868C16.5271 5.94485 15.6294 6.18526 15.2255 6.88487L15 7.27534V13.1347L17.7626 8.34971C17.9582 8.01087 18.0103 7.61612 17.9089 7.23813Z" fill="#F2F2F2"/>
              </svg>

              <p>Доступно в Google Play</p>
            </div>
          </div>
        </div>
        <div class="footer-row">
          <ul>
            <li class="footer-link" v-for="link in footerLinks" :key="link.id"><nuxt-link :to="link.url" >{{link.name}}</nuxt-link></li>
          </ul>
        </div>

      </div>

    </footer>
    <a style="display: none" href="#" id="pizzaModalBtn"  @click.prevent="pizzaModal=true"></a>
    <el-dialog class="item-modal" :visible.sync="pizzaModal" @open="pizzaModalOpen" @closed="pizzaModalClosed">
      <div class="item-modal__header">
         <h3 class="item-modal__title">{{item.name}}</h3>
        <el-tooltip  placement="bottom-end" effect="light">
          <div class="item-card__title--info-tooltip" slot="content"><p>К/Б/Ж/У</p><span>300/14/20/70</span></div>
          <el-button class="item-card__title--info-btn" type="text"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" fill="#F8F9FA"/>
            <path d="M12.2273 19H13.5682V10.2727H12.2273V19ZM12.9091 8.81818C13.4318 8.81818 13.8636 8.40909 13.8636 7.90909C13.8636 7.40909 13.4318 7 12.9091 7C12.3864 7 11.9545 7.40909 11.9545 7.90909C11.9545 8.40909 12.3864 8.81818 12.9091 8.81818Z" fill="#262626"/>
          </svg>
          </el-button>
        </el-tooltip>
      </div>

      <!--   item-modal__ingridient ingridientCanRemoved   ingridientRemoved-->
      <div class="item-modal__ingridients">
        <div class="item-modal__ingridient"
             v-for="(ingridient,index) in item.base_ingridients"
             :key="ingridient.id">
          <p v-if="!ingridient.is_can_removed" >{{ingridient.name}}</p>
          <p v-else @click="toggleIngridient(index)" class="ingridientCanRemoved" :class="{'ingridientRemoved':ingridient.is_removed}">
            <span>{{ingridient.name}}</span>
            <img v-if="!ingridient.is_removed" src="/ingridient-remove-icon.svg" alt="">
            <img v-else src="/ingridient-undo-remove.svg" alt="">
          </p>
        </div>

      </div>
      <div class="item-modal__sizes">
        <el-radio v-model="pizzaSize" :label="22" >22 см</el-radio>
        <el-radio v-model="pizzaSize" :label="33" >33 см</el-radio>
        <p>{{item.weight}} г</p>
      </div>
      <div class="item-modal__slider">
        <h3 class="item-modal__slider--title">Добавить ингредиенты</h3>
        <client-only>
          <swiper ref="itemModalSlider" class="item-modal__slider--wrapper" :options="itemModalSliderOption">

            <swiper-slide v-for="(ingridient,index) in item.additional_ingridients" :key="ingridient.id">
              <div @click="toggleAdditionIngridient(index,ingridient.price.find(x => x.city === $auth.$storage.getCookie('city_id')).price)"
                   class="item-modal__slider--item " :class="{'itemChecked':ingridient.is_added}">
                <img :src="ingridient.image" alt="" data-not-lazy>
                <p class="font-12">{{ingridient.name}}</p>
                <p class="font-12 text-bold">{{ingridient.price.find(x => x.city === $auth.$storage.getCookie('city_id')).price}}р</p>
              </div>
            </swiper-slide>


            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </client-only>
      </div>
      <div class="item-modal__summ"><p>Сумма</p><p class="color-primary">{{total_price}}р</p></div>
      <el-button @click="addToCart" :loading="is_loading" type="primary">В корзину</el-button>
    </el-dialog>

  </div>

</template>

<script>
export default {
  data() {
    return {
      pizzaModal:false,
      meatModal:false,
      is_pizza:false,
      is_meat:false,
      is_loading:false,
      basePrice:0,
      base_price:0,
      pizzaSize: 22,
      additional_price:0,

      navLinks:[
        {id:1,url:'/promotions',name:'Акции'},
        {id:2,url:'/about',name:'О нас'},
        {id:3,url:'/delivery',name:'Доставка и оплата'},
        {id:4,url:'/contacts',name:'Контакты'}
      ],
      footerLinks:[
        {id:1,url:'/policy',name:'Политика конфиденциальности'},
        {id:2,url:'/offer',name:'Договор публичной оферты'},
        {id:3,url:'/',name:'Разработчик сайта'},
        {id:4,url:'/',name:'Дизайнер сайта'}
      ],
      itemModalSliderOption: {

        slidesPerView: 7,
        spaceBetween: 10,
        //loop:true,
        centeredSlides: false,
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // ,autoplay: {
        //   delay: 3000,
        // },

        // breakpoints: {
        //   // when window width is >= 320px
        //   320: {
        //
        //     slidesPerView: 3,
        //     spaceBetween: 50
        //   },
        //   // when window width is >= 480px
        //   480: {
        //     slidesPerView: 5,
        //     //spaceBetween: 30
        //   },
        //   // when window width is >= 640px
        //
        // }
      },
      item:{},

    };
  },
  watch: {
    pizzaSize: function (val){
      val === 22 ? this.base_price = this.basePrice : this.base_price = parseInt(this.base_price * 1.2)
    }
  },
  mounted() {

  },
  methods: {
    async addToCart () {
      this.is_loading=true
      await this.$axios.post(`/api/cart/add_to_cart`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          item:this.item,
          selected_size:this.is_pizza ? this.pizzaSize: 0,
          weight:0,
          units:1,
          city_id:this.$auth.$storage.getCookie('city_id'),
          is_meat:this.is_meat

        })
      await this.$store.dispatch('cart/fetchCart')
      this.pizzaModal = false
    },
    pizzaModalClosed () {
      this.basePrice=0
      this.base_price=0
      this.pizzaSize=22
      this.additional_price=0
      this.is_loading=false
    },
    async pizzaModalOpen () {
      const responce = await this.$axios(`/api/items/get_item_by_id/${this.$store.getters['products/getOpenedPizza']}`)
      this.item = responce.data
      this.is_pizza = true
      this.basePrice = this.base_price = this.item.prices.find(x => x.city === this.$auth.$storage.getCookie('city_id')).price

    },
    async meatModalOpen () {
      console.log(this.$store.getters['products/getOpenedMeat'])
      const responce = await this.$axios(`/api/items/get_item_by_id/${this.$store.getters['products/getOpenedMeat']}`)
      this.item = responce.data
      this.is_meat = true
      this.basePrice = this.base_price = this.item.prices.find(x => x.city === this.$auth.$storage.getCookie('city_id')).price
      console.log('MEAT MODAL SHOW',responce.data)
    },
    toggleIngridient (index) {
      this.item.base_ingridients[index].is_removed = !this.item.base_ingridients[index].is_removed
    },
    toggleAdditionIngridient (index,price) {
      if(!this.item.additional_ingridients[index].is_added){
        this.item.additional_ingridients[index].is_added = true
        this.additional_price += price
      }else{
        this.item.additional_ingridients[index].is_added = false
        this.additional_price -= price
      }
    }
  },
  computed:{

    total_price(){
      return this.base_price + this.additional_price
    }
  }
}
</script>


