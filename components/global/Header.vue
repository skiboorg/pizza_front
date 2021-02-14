<template>
  <div class="">
    <header class="header" :class="{'halfHeader':  scrollPosition > 80}">
      <div class="container">
        <div class="header-top">
          <div @click="$router.push('/')" class="header-top-logo">
            <img src="/logo_big.svg" alt="" data-not-lazy>
          </div>
          <div class="header-top-address">
            <p @click="currentCityIsOK=false, cityModal=true" class="header-top-address__link">{{currentCity.name}}</p>
            <p>{{currentCity.info}}</p>
          </div>
          <nav class="header-top-nav">
            <nuxt-link :to="link.url" v-for="link in navLinks" :key="link.id">{{link.name}}</nuxt-link>
          </nav>
          <div @click="$auth.loggedIn ? $router.push('/lk'):authModal=true" class="header-top-login text-center">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4022 14.5484C13.4301 14.5484 13.4581 14.5484 13.4916 14.5484C13.5028 14.5484 13.514 14.5484 13.5252 14.5484C13.5419 14.5484 13.5643 14.5484 13.5811 14.5484C15.2193 14.5204 16.5444 13.9445 17.5229 12.843C19.6755 10.4164 19.3177 6.25658 19.2785 5.8596C19.1388 2.87948 17.7298 1.45372 16.5668 0.788362C15.7002 0.290743 14.6881 0.0223649 13.5587 0H13.5196C13.514 0 13.5028 0 13.4972 0H13.4637C12.843 0 11.6242 0.100642 10.4556 0.765997C9.28144 1.43135 7.85009 2.85711 7.71031 5.8596C7.67117 6.25658 7.31333 10.4164 9.46595 12.843C10.4388 13.9445 11.7639 14.5204 13.4022 14.5484ZM9.20316 5.99938C9.20316 5.98261 9.20875 5.96583 9.20875 5.95465C9.39326 1.94574 12.2392 1.51522 13.4581 1.51522H13.4804C13.4916 1.51522 13.5084 1.51522 13.5252 1.51522C15.0348 1.54877 17.6012 2.1638 17.7745 5.95465C17.7745 5.97142 17.7745 5.9882 17.7801 5.99938C17.7857 6.03852 18.1771 9.84055 16.3991 11.8422C15.6946 12.6362 14.7552 13.0275 13.5196 13.0387C13.5084 13.0387 13.5028 13.0387 13.4916 13.0387C13.4804 13.0387 13.4749 13.0387 13.4637 13.0387C12.2336 13.0275 11.2887 12.6362 10.5898 11.8422C8.81737 9.85173 9.19757 6.03293 9.20316 5.99938Z" fill="black"/>
              <path d="M24.9815 21.4479C24.9815 21.4423 24.9815 21.4367 24.9815 21.4311C24.9815 21.3864 24.9759 21.3417 24.9759 21.2913C24.9424 20.1843 24.8697 17.5955 22.4431 16.768C22.4263 16.7624 22.404 16.7569 22.3872 16.7513C19.8655 16.1083 17.7688 14.6546 17.7465 14.6378C17.4054 14.3974 16.9357 14.4812 16.6953 14.8223C16.4549 15.1634 16.5388 15.633 16.8798 15.8734C16.9749 15.9405 19.2002 17.4893 21.9846 18.205C23.2874 18.6691 23.4327 20.0613 23.4719 21.3361C23.4719 21.3864 23.4719 21.4311 23.4775 21.4758C23.4831 21.9791 23.4495 22.7562 23.3601 23.2035C22.4543 23.7179 18.9039 25.4959 13.5027 25.4959C8.12398 25.4959 4.55119 23.7123 3.63982 23.1979C3.55036 22.7506 3.51122 21.9735 3.52241 21.4703C3.52241 21.4255 3.528 21.3808 3.528 21.3305C3.56714 20.0557 3.71251 18.6635 5.01526 18.1994C7.79969 17.4837 10.025 15.9293 10.12 15.8678C10.4611 15.6274 10.545 15.1578 10.3046 14.8167C10.0641 14.4756 9.59447 14.3918 9.25341 14.6322C9.23104 14.649 7.14552 16.1027 4.61269 16.7457C4.59033 16.7513 4.57355 16.7569 4.55678 16.7624C2.13019 17.5955 2.05751 20.1843 2.02396 21.2857C2.02396 21.3361 2.02396 21.3808 2.01837 21.4255C2.01837 21.4311 2.01837 21.4367 2.01837 21.4423C2.01278 21.733 2.00719 23.2259 2.30352 23.9751C2.35943 24.1205 2.46007 24.2435 2.59426 24.3274C2.762 24.4392 6.78209 27 13.5083 27C20.2346 27 24.2546 24.4336 24.4224 24.3274C24.551 24.2435 24.6572 24.1205 24.7131 23.9751C24.9927 23.2315 24.9871 21.7386 24.9815 21.4479Z" fill="black"/>
            </svg>
            <p  class="color-primary">{{$auth.loggedIn ? 'ЛК' : 'Войти'}} </p>

          </div>
          <div class="header-top-phone text-right">
            <p><a class="color-primary text-bold font-20" target="_blank" href="tel:89095483434">89095483434</a></p>
            <p>Обратный звонок</p>
          </div>
          <div class="header-top-mobile-phone">
            <a href="tel:89095483434" target="_blank">
              <img src="/red-phone-icon.png" alt="" data-not-lazy>
            </a>
          </div>
          <div @click="mobileMenuActive=!mobileMenuActive" class="header-top-mobile-toggle">
            <svg width="33" height="17" viewBox="0 0 33 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="33" height="3" rx="1.5" fill="url(#paint0_linear)"/>
              <rect x="8" y="7" width="25" height="3" rx="1.5" fill="url(#paint1_linear)"/>
              <rect x="18" y="14" width="15" height="3" rx="1.5" fill="url(#paint2_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="1.30489e-07" y1="2.04" x2="32.9757" y2="1.11466" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0520833" stop-color="#E73A14"/>
                  <stop offset="1" stop-color="#EA3C24"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="8" y1="9.04" x2="32.99" y2="8.50875" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0520833" stop-color="#E73A14"/>
                  <stop offset="1" stop-color="#EA3C24"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="18" y1="16.04" x2="32.9983" y2="15.8487" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0520833" stop-color="#E73A14"/>
                  <stop offset="1" stop-color="#EA3C24"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="header-mobile-menu" :class="{'mobileMenuActive':mobileMenuActive}">
            <div @click="mobileMenuActive=!mobileMenuActive" class="header-mobile-menu__close">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.32868 7.50065L14.8284 1.0009C15.0572 0.772063 15.0572 0.401047 14.8284 0.172239C14.5996 -0.0565698 14.2285 -0.0565991 13.9997 0.172239L7.49999 6.67199L1.00029 0.172239C0.771451 -0.0565991 0.400436 -0.0565991 0.171628 0.172239C-0.0571801 0.401077 -0.0572094 0.772092 0.171628 1.0009L6.67133 7.50062L0.171628 14.0004C-0.0572094 14.2292 -0.0572094 14.6002 0.171628 14.829C0.286032 14.9434 0.436003 15.0006 0.585973 15.0006C0.735943 15.0006 0.885885 14.9434 1.00032 14.829L7.49999 8.32931L13.9997 14.829C14.1141 14.9434 14.2641 15.0006 14.414 15.0006C14.564 15.0006 14.714 14.9434 14.8284 14.829C15.0572 14.6002 15.0572 14.2292 14.8284 14.0004L8.32868 7.50065Z" fill="#262626"/>
              </svg>

            </div>
            <div class="header-mobile-menu__wrapper">

            <span>Ваш город: <p @click="currentCityIsOK=false, cityModal=true" class="header-top-address__link">{{currentCity.name}}</p></span>
            <p>{{currentCity.info}}</p><br>

              <a v-if="!this.$auth.loggedIn" href="#" @click.prevent="authModal=true">Войти</a>
              <nuxt-link v-else to="/lk">ЛК</nuxt-link>
              <nuxt-link to="/">Главная</nuxt-link>
              <nuxt-link :to="link.url" v-for="link in navLinks" :key="link.id">{{link.name}}</nuxt-link>
              <a href="#">Телефон доставки: 8-ххх-ххх-хх-хх</a>
              <div class="header-mobile-menu__social">
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
          </div>
        </div><!--header-top -->
        <div class="header-bottom" :class="{'hideBottom': !isHomePage}">
          <div class="header-bottom-menu__slider">
            <div class="header-bottom-menu__slider--overlay"></div>
            <client-only>
              <swiper class="header-bottom-menu__slider"  :options="sliderMenuOption">
                <swiper-slide v-for="item in categories"
                              :key="item.id">
                  <span v-if="isHomePage">
                <p  v-if="!item.url"><a @click="currentCatAnchor=item.id"
                                        :class="{'color-primary':currentCatAnchor===item.id}"
                                        href="#" v-scroll-to="`#catID_${item.id}`">{{item.name}}</a> </p>
                <p  v-else><nuxt-link :to="item.url">{{item.name}}</nuxt-link> </p>
              </span>
                  <span v-else>
                <p  v-if="!item.url"><nuxt-link  :to="`/#catID_${item.id}`">{{item.name}}</nuxt-link></p>
                <p  v-else><nuxt-link :to="item.url">{{item.name}}</nuxt-link> </p>
              </span>
                </swiper-slide>
                <swiper-slide>
                  <p><nuxt-link to="/promotions">Акции</nuxt-link> </p>
                </swiper-slide>
              </swiper>
            </client-only>
          </div>
          <div class="header-bottom-menu">
            <span v-for="item in categories" :key="item.id">
              <span v-if="isHomePage">
                <p class="header-bottom-menu__item" v-if="!item.url"><a @click="currentCatAnchor=item.id"
                                                                        :class="{'color-primary':currentCatAnchor===item.id}"
                                                                        href="#" v-scroll-to="`#catID_${item.id}`">{{item.name}}</a> </p>
                <p class="header-bottom-menu__item" v-else><nuxt-link :to="item.url">{{item.name}}</nuxt-link> </p>
              </span>
              <span v-else>
                <p class="header-bottom-menu__item" v-if="!item.url"><nuxt-link  :to="`/#catID_${item.id}`">{{item.name}}</nuxt-link></p>
                <p class="header-bottom-menu__item" v-else><nuxt-link :to="item.url">{{item.name}}</nuxt-link> </p>
              </span>

            </span>

          </div>
          <!--          {{$store.getters['cart/getCart']}}-->
          <div class="header-bottom-cart">
            <div  class="header-bottom-cart__inner"
                  @mouseover="cartHeaderActive=true"
                  @mouseleave="cartHeaderActive=false">
              <p class="header-bottom-cart__summ">{{this.$store.getters['cart/getCart'].total_price}}р</p>
              <div class="header-bottom-cart__icon" >
                <div v-if="items_in_cart > 0" class="header-bottom-cart__icon-num">
                  {{items_in_cart}}
                </div>
                <img  src="/cart-icon.svg" alt="" data-not-lazy>
              </div>
              <Cart :recommended_items_count="2" :souses_items_count="4" :cartHeader="true" :cartHeaderActive="cartHeaderActive"/>
            </div>

          </div>
        </div><!--header-bottom -->
      </div>
    </header>
    <el-dialog class="authModal modal" :visible.sync="authModal" @closed="authModalClose">
      <div v-if="authModalTab==='loginTab'"><!-- loginTab-->
        <h3 class="modal-title">Войти</h3>
        <el-input class="in-edit-mode" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (xxx) xxx-xx-xx" v-model="userLogin.phone"></el-input>
        <el-input class="in-edit-mode" show-password placeholder="Пароль"v-model="userLogin.password"></el-input>
        <el-button @click="userLoginAction" type="primary">Войти</el-button>
        <div class="modal-text"><p>Еще нет аккаунта? <span @click="authModalTab='registerTab'">Зарегистрироваться</span></p></div>
        <div class="modal-text"><p><span @click="authModalTab='restoreTab'">Забыли пароль?</span></p></div>
      </div><!-- loginTab-->
      <div v-if="authModalTab==='registerTab'"><!-- registerTab-->
        <h3 class="modal-title">Регистрация</h3>
        <el-input class="in-edit-mode" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (xxx) xxx-xx-xx" v-model="userRegister.phone"></el-input>
        <el-input class="in-edit-mode" show-password placeholder="Пароль"v-model="userRegister.password1"></el-input>
        <el-input class="in-edit-mode" show-password placeholder="Пароль еще раз"v-model="userRegister.password2"></el-input>
        <el-button type="primary" @click="userRegisterAction">Зарегистрироваться</el-button>
        <div class="modal-text"><p>Уже есть аккаунт?<span @click="authModalTab='loginTab'">Войти</span></p></div>
      </div><!-- registerTab-->
      <div v-if="authModalTab==='restoreTab'"><!-- restoreTab-->
        <h3 class="modal-title">Восстановление пароля</h3>
        {{restorePhone}}
        {{restoreCode}}

        <p class="modal-subtitle">{{restoreText}}</p>
        <div v-if="restoreStep===1">
          <el-input class="in-edit-mode" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (xxx) xxx-xx-xx" v-model="restorePhone"></el-input>
          <el-button type="primary" :loading="restoreButtonLoading" @click="sendRestoreSMS">Отправить СМС с кодом</el-button>
        </div>
        <div v-if="restoreStep===2">
          <el-input style="display: none" class="in-edit-mode"  placeholder="- - - -" v-model="restoreCode"></el-input>
          <el-input class="in-edit-mode" v-mask="'#-#-#-#'" placeholder="- - - -" v-model="restoreCode"></el-input>
          <el-button type="primary" :loading="restoreButtonLoading" @click="sendRestoreSMS">Отправить код</el-button>
        </div>

        <div class="modal-text"><p><span>Повторить отправку смс ({{restoreSecondsLeft}} сек)</span> </p></div>
      </div><!-- restoreTab-->


    </el-dialog>
    <el-dialog class="cityModal modal" :visible.sync="cityModal">
      <div v-if="currentCityIsOK">
        <h3 class="modal-title">Ваш город<br>{{currentCity.name}} ?</h3>
        <div class="modal-group">
          <el-button @click="changeCity(currentCity.id)" type="primary">Да</el-button>
          <el-button @click="currentCityIsOK = false" plain>Нет</el-button>
        </div>
      </div>
      <div v-else>
        <h3 class="modal-title">Выберите город</h3>
        <div class="modal-cities">
          <p @click="changeCity(city.id)" class="modal-city" v-for="city in this.$store.getters['city/getCity']" :key="city.id">{{city.name}}</p>
        </div>

      </div>

    </el-dialog>
  </div>

</template>
<script>
import Cart from "@/components/Cart"

export default {
  components:{
    Cart
  },
  data() {
    return {
      cityModal: false,
      cartHeaderActive: false,
      currentCity:{id:'',name:'',info:''},
      currentCityIsOK:true,
      currentCatAnchor:null,
      scrollPosition:null,
      userLogin:{
        phone:null,
        password:null,
      },
      userRegister:{
        phone:null,
        password1:null,
        password2:null,
      },
      isHomePage:false,
      authModal:false,
      authModalTab:'loginTab',
      restoreText:'Введите номер телефона, использованный при регистрации. На него придет смс-сообщение с кодом,' +
        ' необходимым для восстановления пароля',
      restoreStep:1,
      restorePhone:null,
      restoreCode:null,
      restoreSecondsLeft:59,
      restoreButtonLoading:false,
      mobileMenuActive:false,
      navLinks:[
        {id:1,url:'/promotions',name:'Акции'},
        {id:2,url:'/about',name:'О нас'},
        {id:3,url:'/delivery',name:'Доставка и оплата'},
        {id:4,url:'/contacts',name:'Контакты'}
      ],
      categories:null,
      sliderMenuOption: {
        //slidesPerView: 3,
        //spaceBetween: 20,
        //centeredSlides: true,

        breakpoints: {
          // when window width is >= 320px
          320: {

            slidesPerView: 3,
            spaceBetween: 50
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 5,
            //spaceBetween: 30
          },
          // when window width is >= 640px

        }
      },
    };
  },
  watch: {
    '$store.state.city.main_city': function() {
      console.log(this.$store.state.city.main_city)
      this.currentCity = this.$store.getters['city/getCity'].find(x => x.id === this.$store.state.city.main_city)
    },
    '$store.state.products.categories': function() {
      console.log(this.$store.state.products.categories)
      this.categories = this.$store.getters['products/getCategories']
    },
    '$route.path': function(val) {
      let fullPath =this.$route.fullPath.split('#')
      if (fullPath.length>1){
        this.currentCatAnchor = parseInt(fullPath[1].split('_')[1])
      }else{
        this.currentCatAnchor = null
      }
      this.mobileMenuActive=false
      this.$route.path === '/' ? this.isHomePage = true : this.isHomePage = false
    }
  },
  computed:{
    items_in_cart () {
      return this.$store.getters['cart/getCart'].items.length +
        this.$store.getters['cart/getCart'].souces.length +
        this.$store.getters['cart/getCart'].pizza_constructors.length
    }
  },
  beforeCreate() {
    console.log('header before create',this.$auth.$storage.getCookie('city_id'))
    this.$auth.$storage.getCookie('city_id') ? null : this.cityModal = true
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);

    this.$route.path === '/' ? this.isHomePage = true : this.isHomePage = false
    this.currentCity = this.$store.getters['city/getCity'].find(x => x.id === this.$auth.$storage.getCookie('city_id'))
    this.categories = this.$store.getters['products/getCategories']
    console.log('city/getCity',this.$store.getters['city/getCity'])
    console.log('header mounted',this.$store.getters['city/getMainCity'])

    if (!this.$auth.$storage.getCookie('session_id')){
      this.$auth.$storage.setCookie('session_id', this.uuidv4())
      console.log('create session_id')
    }else {
      console.log('session_id exists')
    }



  },
  methods: {
    notify(title,message,type){
      this.$notify({
        title: title,
        message: message,
        type: type
      });
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    async changeCity (id) {
      await this.$store.dispatch('city/changeMainCity',id)
      await this.$store.dispatch('products/fetchItems')
      await this.$axios.post(`api/cart/erase_cart/${this.$auth.$storage.getCookie('session_id')}`)
      await this.$store.dispatch('cart/eraseCart')
      this.cityModal = false
      // this.currentCityIsOK = true

    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    countDownTimer() {
      if(this.restoreSecondsLeft > 0) {
        setTimeout(() => {
          this.restoreSecondsLeft -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    authModalClose(){
      this.authModalTab = 'loginTab'
      this.restoreText = 'Введите номер телефона, использованный при регистрации. На него придет смс-сообщение с кодом,' +
        ' необходимым для восстановления пароля'
      this.restoreStep = 1
      this.restoreButtonLoading = false
      this.restoreSecondsLeft = 59

    },
    sendRestoreSMS(){
      this.countDownTimer()
      this.restoreButtonLoading = true
      this.restoreStep = 2
      this.restoreText = `На номер ${this.restorePhone} было отправлено сообщение с кодом необходимым для восстановления пароля, введите его для восстановления пароля`
    },
    resendSMS(){
      if(this.restoreSecondsLeft === 0){
        this.restoreSecondsLeft = 59
        this.sendRestoreSMS()
      }
    },
    async userRegisterAction(){
      try{
        let response =  this.$axios.post('/auth/users/', {
          phone:this.userRegister.phone,
          password:this.userRegister.password2,
        })

        this.notify('Успешно','Аккаунт создан','success')
        this.authModalTab='loginTab'
      }catch (e) {
        this.notify('Ошибка','Проверьте введеные данные','error')
      }
    },
    async userLoginAction() {

      try {
        let response = await this.$auth.loginWith('local', { data: this.userLogin })
        await this.$store.dispatch('cart/fetchCart')
        this.authModal=false
      } catch (error) {
        this.notify('Ошибка','Проверьте введеные данные','error')
      }
    },

  }
}
</script>


