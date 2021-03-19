<template>
<div class="order_complete">
  <h3 class="">Ваш заказ успешно оплачен</h3>
  <p>Номер заказа <span>{{$route.params.order_code}}</span> </p>
  <el-button plain @click="$router.push('/')">На главную</el-button>
</div>
</template>

<script>
export default {
  scrollToTop: true,
  async fetch({store}){
    await store.dispatch('city/fetchCity')
    await store.dispatch('cart/fetchCart')
  },
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
<style lang="sass">
.order_complete
  height: 50vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  h3
    font-size: 25px
    font-weight: bold
    margin-bottom: 30px
  p
    font-size: 18px
    margin-bottom: 50px
    span
      font-weight: bold
</style>

