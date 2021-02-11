<template>
<div class="cart-container">
  <h3 class="home-page-category__title">Корзина</h3>
    <Cart :recommended_items_count="2" :souses_items_count="4" :cartHeader="false"/>
  </div>
</template>

<script>
  import Cart from "@/components/Cart";

  export default {
    async fetch({store}){
    await store.dispatch('city/fetchCity')
    await store.dispatch('cart/fetchCart')
  },
    components:{
    Cart
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


