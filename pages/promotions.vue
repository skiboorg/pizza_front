<template>
 <div class="delivery-page">
    <div class="container">
      <h1 class="home-page-category__title">Акции</h1>
      <div class="promotions">
        <div class="promotion">
          <img class="promotion__img" src="http://placehold.it/410x190" alt="">
          <p class="promotion__title">Название акции</p>
          <p class="promotion__text">условия акции условия акции условия акции условия акции условия акции условия акции  </p>
          <el-button plain>Заказать</el-button>
        </div>
        <div class="promotion">
          <img class="promotion__img" src="http://placehold.it/410x190" alt="">
          <p class="promotion__title">Название акции</p>
          <p class="promotion__text">условия акции условия акции условия акции условия акции условия акции условия акции  </p>
          <el-button plain>Заказать</el-button>
        </div>
        <div class="promotion">
          <img class="promotion__img" src="http://placehold.it/410x190" alt="">
          <p class="promotion__title">Название акции</p>
          <p class="promotion__text">условия акции условия акции условия акции условия акции условия акции условия акции  </p>
          <el-button plain>Заказать</el-button>
        </div>
        <div class="promotion">
          <img class="promotion__img" src="http://placehold.it/410x190" alt="">
          <p class="promotion__title">Название акции</p>
          <p class="promotion__text">условия акции условия акции условия акции условия акции условия акции условия акции  </p>
          <el-button plain>Заказать</el-button>
        </div>
        <div class="promotion">
          <img class="promotion__img" src="http://placehold.it/410x190" alt="">
          <p class="promotion__title">Название акции</p>
          <p class="promotion__text">условия акции условия акции условия акции условия акции условия акции условия акции  </p>
          <el-button plain>Заказать</el-button>
        </div>
        <div class="promotion">
          <img class="promotion__img" src="http://placehold.it/410x190" alt="">
          <p class="promotion__title">Название акции</p>
          <p class="promotion__text">условия акции условия акции условия акции условия акции условия акции условия акции  </p>
          <el-button plain>Заказать</el-button>
        </div>
        <div class="promotion">
          <img class="promotion__img" src="http://placehold.it/410x190" alt="">
          <p class="promotion__title">Название акции</p>
          <p class="promotion__text">условия акции условия акции условия акции условия акции условия акции условия акции  </p>
          <el-button plain>Заказать</el-button>
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


