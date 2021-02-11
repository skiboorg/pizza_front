<template>
  <div class="delivery-page">
    <div class="container">
      <h1 class="home-page-category__title">Контакты</h1>

      <Map :title="'Приходите в наше уютное кафе'"/>
    </div>

  </div>
</template>

<script>
import Map from '@/components/global/Map'
export default {
  async fetch({store}){
    await store.dispatch('city/fetchCity')
    await store.dispatch('cart/fetchCart')
  },
  scrollToTop: true,
  components:{
    Map
  },
  data() {
    return {
    };
  }
}
</script>



