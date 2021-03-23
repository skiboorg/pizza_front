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

          <swiper-slide class="home-page-slider__item" v-for="banner in this.$store.getters['products/getBanners']" :key="banner.id">
            <div class=""><img :src="banner.image" alt="" data-not-lazy></div>
          </swiper-slide >

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </client-only>
    </section>

    <section :id="`catID_${category.id}`" class="home-page-category" v-for="category in _.orderBy(categories,'order_num' )" :key="category.id">
      <div class="container">
        <h3 class="home-page-category__title">{{category.name}}</h3>
        <div class="home-page-category__items">
          <PizzaConstructor v-if="category.is_pizza"/>
          <ItemCard v-if="!item.is_for_meat" v-for="item in items.filter(x => x.category.id === category.id)"
                    :key="item.id"
                    :item="item"/>



        </div>
      </div>
    </section>

  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import PizzaConstructor from '@/components/PizzaConstructor'
export default {
  async fetch({store}){
    await store.dispatch('city/fetchCity')
    await store.dispatch('cart/fetchCart')
    await store.dispatch('products/setBannersAction')
  },
  components:{
    ItemCard,
    PizzaConstructor
  },
  data() {
    return {
      scrollPosition: null,
      categories:this.$store.getters['products/getCategories'],
      items:this.$store.getters['products/getItems'],
      sliderHomeTopOption: {
        //slidesPerView: 2,
        spaceBetween: 10,
        loop:true,
        //centeredSlides: true,
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

        breakpoints: {
          // when window width is >= 320px
          320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 10,
            loop:false,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: true,
          },
          // when window width is >= 640px

        }
      },
    };
  },
  watch: {
     '$store.state.products.categories': function() {

      this.categories = this.$store.getters['products/getCategories']
    },
    '$store.state.products.items': function() {
      this.items = this.$store.getters['products/getItems']
    },
  },
  computed: {
    homeTopSlider() {
      return this.$refs.homeTopSlider.$swiper
    }
  },
  async mounted() {
     await this.$store.dispatch('products/fetchItems')

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


