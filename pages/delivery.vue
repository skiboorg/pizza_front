<template>
  <div class="delivery-page">
    <div class="container">
      <h1 class="home-page-category__title">Доставка и оплата</h1>
      <img class="mb-20" src="/delivery.jpg" alt="">
      <p class="text-center text-bold delivery-page__time">Среднее время доставки 30 минут</p>
      <h3>Способы оплаты</h3>
      <div class="delivery-page__payments">
        <div class="text-center">
          <img src="/pay1.png" alt="">
          <p>Наличными курьеру</p>
        </div>
        <div class="text-center">
           <img src="/pay2.png" alt="">
          <p>Онлайн оплата на сайте</p>
        </div>
        <div class="text-center">
          <img src="/pay3.png" alt="">
          <p>Оплата картой курьеру</p>
        </div>



      </div>
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


