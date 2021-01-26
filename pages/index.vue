<template>
  <div class="home-page">
    <section class="home-page-slider">
      <div class="home-page-slider__overlay overlay-left">
        <svg @click="homeTopSliderPrev" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17" cy="17" r="17" ></circle>
          <path d="M14.759 9.8418L20.9409 16.9997L14.759 24.1576" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <div @click="homeTopSliderNext" class="home-page-slider__overlay overlay-right">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17" cy="17" r="17" ></circle>
          <path d="M14.759 9.8418L20.9409 16.9997L14.759 24.1576" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <client-only>
        <swiper ref="homeTopSlider" :options="sliderHomeTopOption">

          <swiper-slide >
            <div class=""><img src="http://placehold.it/1100x500" alt="" data-not-lazy></div>
          </swiper-slide>
          <swiper-slide >
            <div class=""><img src="http://placehold.it/1100x500" alt="" data-not-lazy></div>
          </swiper-slide>
          <swiper-slide >
            <div class=""><img src="http://placehold.it/1100x500" alt="" data-not-lazy></div>
          </swiper-slide>
          <swiper-slide >
            <div class=""><img src="http://placehold.it/1100x500" alt="" data-not-lazy></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </section>
    <section :id="`catID_${category.id}`" class="home-page-category" v-for="category in categories" :key="category.id">
      <div class="container">
        <h3 class="home-page-category__title">{{category.name}}</h3>
        <div class="home-page-category__items">
          <PizzaConstructor v-if="category.with_constructor"/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>


        </div>
      </div>
    </section>

  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import PizzaConstructor from '@/components/PizzaConstructor'
export default {
  components:{
    ItemCard,
    PizzaConstructor
  },
  data() {
    return {
      scrollPosition: null,
      categories:[
        {id:1,name:'Шашлык',with_constructor:false},
        {id:2,name:'Пицца',with_constructor:true},
        {id:3,name:'Роллы',with_constructor:false},
        {id:4,name:'Шаурма',with_constructor:false},
        {id:5,name:'Пироги',with_constructor:false},
        {id:6,name:'Закуски',with_constructor:false},
        {id:7,name:'Напитки',with_constructor:false},
        {id:8,name:'Рыба',with_constructor:false},
        {id:9,name:'Акции',with_constructor:false},
      ],
      sliderHomeTopOption: {

        slidesPerView: 2,
        spaceBetween: 10,
        loop:true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        ,autoplay: {
          delay: 3000,
        },

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
    };
  },
  watch: {
  },
  computed: {
    homeTopSlider() {
      return this.$refs.homeTopSlider.$swiper
    }
  },
  mounted() {

  },
  methods: {
    homeTopSliderPrev(){
      this.homeTopSlider.slidePrev()
    },
    homeTopSliderNext(){
      this.homeTopSlider.slideNext()
    },

  }
}
</script>


