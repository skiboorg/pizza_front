<template>
 <div class="delivery-page">
    <div class="container">
      <h1 class="home-page-category__title">Акции</h1>
      <div class="promotions">
        <div class="promotion" v-for="promo in promotions" :key="promo.id">
          <img class="promotion__img" :src="promo.image" alt="">
          <p class="promotion__title">{{promo.name}}</p>
          <p class="promotion__text">{{promo.text}} </p>
          <el-button plain v-if="promo.category" @click="$router.push(`/#catID_${promo.category}`)">Перейти</el-button>
        </div>


      </div>



    </div>

  </div>
</template>

<script>
  export default {
    async fetch({store}){
    await store.dispatch('city/fetchCity')
    await store.dispatch('cart/fetchCart')
  },
    async asyncData({$axios}){
      try{
        const  response = await $axios.get(`/api/promotion/get_all`)
        const promotions = response.data
        return {promotions }
      }catch (e) {
        throw e
      }

    },
    scrollToTop: true,
    // auth: true,
    data() {
      return {
      };
    },
    watch: {
    },
    mounted() {
    },
    methods: {
    }
  }
</script>


