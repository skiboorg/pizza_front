<template>
  <div class="">
    <div class="item-card item-card__constructor">
      <div class="item-card__top" >
        <img src="/constr.png" alt="">
      </div>
      <div class="item-card__bottom">
        <div class="item-card__title">
          <p>Пицца-конструктор</p>
        </div>
        <p class="item-card__ingridients">
          <span>Выберите половинки пицц и соберите свою!</span>
        </p>
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
          <div class="pizza-constructor__left--pizza " :class="{'pizzaDisabled':!firstPizza}">
            <h3>Первая половина</h3>
            <div v-if="!firstPizza"><p>Выберите пиццу</p> </div>
            <div v-else>
              <p>{{firstPizza.name}}</p>
              <span v-for="ingridient in firstPizza.ingridients" :key="ingridient.id">{{ingridient.name}}</span>
            </div>

          </div>
          <div class="pizza-constructor__left--pizza " :class="{'pizzaDisabled':!secondPizza}">
            <h3>Вторая половина</h3>
            <div v-if="!secondPizza"><p>Выберите пиццу</p> </div>
            <div v-else>
              <p>{{secondPizza.name}}</p>
              <span v-for="ingridient in secondPizza.ingridients" :key="ingridient.id">{{ingridient.name}}</span>
            </div>
          </div>
          <div class="pizza-constructor__left--bottom">
            <div class="pizza-constructor__left--price">
            <p>Сумма</p>
            <p v-if="pizzaPrice>0">{{pizzaPrice}}р</p>
            <p v-else><i class="el-icon-loading"></i></p>
          </div>
          <el-button :disabled="!firstPizzaIndex || !secondPizzaIndex" type="primary">Выбрать</el-button>
          </div>

        </div>
        <div class="pizza-constructor__right">
          <div class="pizza-constructor__right--pizzas">
            <!--            pizzaNotChecked pizzaChecked-->
            <div @click="selectPizzaPart(pizza.id,index)" class="pizza-constructor__right--pizza "
                 :class="{'pizzaChecked': firstPizzaIndex === pizza.id || secondPizzaIndex === pizza.id}"
                 v-for="(pizza,index) in pizzas" :key="pizza.id">
              <div class="pizza-constructor__right--pizza__top" :style="`background: url(${pizza.image})`"></div>
              <div class="pizza-constructor__right--pizza__bottom">
                <p>{{pizza.name}}</p>
                <p>{{pizza.price}}р</p>
              </div>
            </div>

          </div>
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

      pizzas:[
        {id:1,name:'пицца1',price:1001,image:'/small_pz.png',ingridients:[
            {id:1,name:'Ветчина'},
            {id:2,name:'моцарелла'},
            {id:3,name:'томатный соус'},
            {id:4,name:'базилик'},
            {id:5,name:'Ветчина'},

          ]},
        {id:2,name:'пицца2',price:1002,image:'/small_pz.png',ingridients:[
            {id:1,name:'Ветчина'},
            {id:2,name:'моцарелла'},
            {id:3,name:'томатный соус'},
            {id:4,name:'базилик'},
            {id:5,name:'Ветчина'},
            {id:6,name:'моцарелла'},

          ]},
        {id:3,name:'пицца3',price:1003,image:'/small_pz.png',ingridients:[
            {id:1,name:'Ветчина'},
            {id:2,name:'моцарелла'},
            {id:3,name:'томатный соус'},
            {id:4,name:'базилик'},
          ]},
        {id:4,name:'пицца4',price:1004,image:'/small_pz.png',ingridients:[
            {id:4,name:'базилик'},
            {id:5,name:'Ветчина'},
            {id:6,name:'моцарелла'},
            {id:7,name:'томатный соус'},
          ]},
        {id:5,name:'пицца5',price:1004,image:'/small_pz.png',ingridients:[
            {id:4,name:'базилик'},
            {id:5,name:'Ветчина'},
            {id:6,name:'моцарелла'},
            {id:7,name:'томатный соус'},
          ]},
        {id:6,name:'пицца6',price:1004,image:'/small_pz.png',ingridients:[
            {id:4,name:'базилик'},
            {id:5,name:'Ветчина'},
            {id:6,name:'моцарелла'},
            {id:7,name:'томатный соус'},
          ]},
        {id:7,name:'пицца7',price:1004,image:'/small_pz.png',ingridients:[
            {id:4,name:'базилик'},
            {id:5,name:'Ветчина'},
            {id:6,name:'моцарелла'},
            {id:7,name:'томатный соус'},
          ]},
      ]
    }
  },
  methods:{
    selectPizzaPart(id,index){
      if (this.firstPizzaIndex && this.secondPizzaIndex){
        if (this.secondPizzaIndex === id){
          this.secondPizzaIndex = null
          this.secondPizza = null
        }else{
          this.firstPizzaIndex = id
          this.secondPizzaIndex = null
          this.firstPizza = this.pizzas[index]
          this.secondPizza = null
        }
        return
      }

      if (!this.firstPizzaIndex && !this.secondPizzaIndex){
        this.firstPizzaIndex = id
        this.firstPizza = this.pizzas[index]
        return
      }

      if (this.firstPizzaIndex  && !this.secondPizzaIndex){
        if (this.firstPizzaIndex !== id){
          this.secondPizzaIndex = id
          this.secondPizza = this.pizzas[index]
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
      pizzaPrice(){

        if (this.firstPizzaIndex && this.secondPizzaIndex){
          return parseInt((this.firstPizza.price / 2) + (this.secondPizza.price / 2))
        }else{
              return 0
        }

      }
    }
}
</script>


