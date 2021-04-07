<template>
  <div class="">

    <div class="item-card item-card__constructor">
      <div class="item-card__top" >
        <img style="object-fit: contain" src="/konstruktor.png" alt="">
      </div>
      <div class="item-card__bottom">
        <div class="">
          <div class="item-card__title">
          <p>Пицца-конструктор</p>
        </div>
        <p class="item-card__ingridients">
          <span>Выберите половинки пицц и соберите свою!</span>
        </p>
        </div>

        <div class="item-card__price">
          <p>от 1000р</p>
          <el-button @click="constructorModal = true" type="primary">Собрать</el-button>
        </div>
      </div>
    </div>
    <el-dialog class="pizza-constructor" :visible.sync="constructorModal" @closed="modalClose">
      <div class="pizza-constructor__inner">

        <div class="pizza-constructor__left">
          <div class="pizza-constructor__left--title">Выберите  половинки пицц</div>
          <div class="pizza-constructor__left--pizza-wrapper">
            <div class="pizza-constructor__left--pizza " :class="{'pizzaDisabled':!firstPizza}">
            <h3>Первая половина</h3>
            <div v-if="!firstPizza"><p>Выберите пиццу</p> </div>
            <div v-else>
              <p>{{firstPizza.name}}</p>
              <span>{{firstPizza.base_ingridients}}</span>
<!--              <span v-for="ingridient in firstPizza.base_ingridients" :key="ingridient.id">{{ingridient.name}}</span>-->
            </div>

          </div>
           <div class="pizza-constructor__left--pizza " :class="{'pizzaDisabled':!secondPizza}">
            <h3>Вторая половина</h3>
            <div v-if="!secondPizza"><p>Выберите пиццу</p> </div>
            <div v-else>
              <p>{{secondPizza.name}}</p>
              <span>{{secondPizza.base_ingridients}}</span>
<!--              <span v-for="ingridient in secondPizza.base_ingridients" :key="ingridient.id">{{ingridient.name}}</span>-->
            </div>
          </div>
          </div>

          <div class="pizza-constructor__left--bottom">
            <div class="pizza-constructor__left--price">
            <p>Сумма</p>
            <p v-if="pizzaPrice>0">{{pizzaPrice}}р</p>
            <p v-else><i class="el-icon-loading"></i></p>
          </div>
          <el-button @click="addToCart" :disabled="!firstPizzaIndex || !secondPizzaIndex" type="primary">Выбрать</el-button>
          </div>

        </div>
        <div class="pizza-constructor__right">
          <div class="pizza-constructor__right--pizzas">
            <!--            pizzaNotChecked pizzaChecked-->
            <div @click="selectPizzaPart(pizza)" class="pizza-constructor__right--pizza "
                 :class="{'pizzaChecked': firstPizzaIndex === pizza.id || secondPizzaIndex === pizza.id}"
                 v-for="(pizza,index) in all_pizzas" :key="pizza.id">
              <div class="pizza-constructor__right--pizza__top" :style="`background: url(${pizza.image})`"></div>
              <div class="pizza-constructor__right--pizza__bottom">
                <p>{{pizza.name}}</p>
                <p>{{pizza.prices.find(x => x.city === $auth.$storage.getCookie('city_id')).price}}р</p>
              </div>
            </div>

          </div>
        </div>
        <div class="pizza-constructor__left--bottom--mobile">
            <div class="pizza-constructor__left--price">
            <p>Сумма</p>
            <p v-if="pizzaPrice>0">{{pizzaPrice}}р</p>
            <p v-else><i class="el-icon-loading"></i></p>
          </div>
          <el-button @click="addToCart" :disabled="!firstPizzaIndex || !secondPizzaIndex" type="primary">Выбрать</el-button>
          </div>
      </div>
    </el-dialog>
  </div>

</template>

<script>

export default {

  props:['title'],
  data() {
    return {
      constructorModal:false,
      firstPizza:null,
      firstPizzaIndex:null,
      secondPizza:null,
      secondPizzaIndex:null,
      items:this.$store.getters['products/getItems'],

    }
  },
  methods:{
    async addToCart (){
      await this.$axios.post('/api/cart/add_to_cart_constructor',{
        session_id:this.$auth.$storage.getCookie('session_id'),
        city_id:this.$auth.$storage.getCookie('city_id'),
        firstPizza: this.firstPizza,
        secondPizza: this.secondPizza,
      })
      await this.$store.dispatch('cart/fetchCart')
      this.constructorModal = false
      this.$fb.track('AddToCart',{
        value: this.pizzaPrice,
        currency: 'RUB',
        contents: [
          {
            id: 'Конструктор',
            quantity: 1
          }
        ],
        content_ids: this.item.id,
      });
    },
    selectPizzaPart(pizza){
      if (this.firstPizzaIndex && this.secondPizzaIndex){
        if (this.secondPizzaIndex === pizza.id){
          this.secondPizzaIndex = null
          this.secondPizza = null
        }else{
          this.firstPizzaIndex = pizza.id
          this.secondPizzaIndex = null
          this.firstPizza = pizza
          this.secondPizza = null
        }
        return
      }

      if (!this.firstPizzaIndex && !this.secondPizzaIndex){
        this.firstPizzaIndex = pizza.id
        this.firstPizza = pizza
        return
      }

      if (this.firstPizzaIndex  && !this.secondPizzaIndex){
        if (this.firstPizzaIndex !== pizza.id){
          this.secondPizzaIndex = pizza.id
          this.secondPizza = pizza
        }else {
          this.firstPizzaIndex = null
          this.firstPizza= null
        }
      }
    },
    modalClose(){
      this.firstPizza = null
      this.firstPizzaIndex = null
      this.secondPizza = null
      this.secondPizzaIndex = null

    }
  },
  computed:{
    all_pizzas (){
      return this.$store.getters['products/getItems'].filter( x => x.category.is_pizza)
    },
      pizzaPrice(){

        if (this.firstPizzaIndex && this.secondPizzaIndex){
          let firstPizzaPrice = this.firstPizza.prices.find(x => x.city === this.$auth.$storage.getCookie('city_id')).price
          let secondPizzaPrice = this.secondPizza.prices.find(x => x.city === this.$auth.$storage.getCookie('city_id')).price
          return parseInt((firstPizzaPrice / 2) + (secondPizzaPrice / 2))
        }else{
              return 0
        }

      }
    }
}
</script>


