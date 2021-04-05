<template>
  <div class="item-card">
    <div class="item-card__top " :class="[item.category.is_pizza ? 'pizza': 'not-pizza' ]">
      <img :src="item.image" alt="">
    </div>
    <div class="item-card__bottom">
      <div class="mb-10">
        <div class="item-card__title">
          <p>{{item.name}}</p>
          <el-tooltip v-if="item.callories>0"  placement="top-end" effect="light">
            <div class="item-card__title--info-tooltip" slot="content"><p>К/Б/Ж/У</p>
              <span>{{item.callories}}/{{item.belki}}/{{item.fat}}/{{item.uglevod}}</span>
            </div>
            <el-button class="item-card__title--info-btn" type="text"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13" cy="13" r="13" fill="#F8F9FA"/>
              <path d="M12.2273 19H13.5682V10.2727H12.2273V19ZM12.9091 8.81818C13.4318 8.81818 13.8636 8.40909 13.8636 7.90909C13.8636 7.40909 13.4318 7 12.9091 7C12.3864 7 11.9545 7.40909 11.9545 7.90909C11.9545 8.40909 12.3864 8.81818 12.9091 8.81818Z" fill="#262626"/>
            </svg>
            </el-button>
          </el-tooltip>
        </div>
        <p class="item-card__ingridients">
          <span v-for="(ingridient,index) in item.base_ingridients" :key="ingridient.id">{{  ingridient.name}}</span>
        </p>
      </div>

      <div class="">
        <div v-if="!item.category.is_pizza" class="item-card__add">
          <img @click="minusUnit" src="/round-minus.svg" alt="">
          <p>{{total_units}} {{unit_name}}</p>
          <img @click="plusUnit" src="/round-plus.svg" alt="">
        </div>
        <div class="item-card__price">
          <p><span v-if="item.category.is_pizza">от</span> {{item.prices.find(x => x.city === $auth.$storage.getCookie('city_id')).price}}р</p>
          <el-button v-if="item.category.is_pizza" type="primary" @click="openModalPizza(item.id)">Выбрать</el-button>
          <!--        <el-button v-else-if="item.category.is_meat" type="primary" @click="openModalMeat(item.id)">Выбрать meat</el-button>-->
          <el-button :loading="is_loading" v-else type="primary" @click="addToCart(item)">В корзину</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {

  props:['item'],
  data() {
    return {
      base_price:0,
      min_unit:this.item.min_unit,
      unit_name:this.item.unit_name,
      units:1,
      is_loading:false


    };
  },
  methods:{
    plusUnit (){
      this.units += 1
    },
    minusUnit (){
      this.units > 1 ? this.units -= 1 : this.units = 1
    },
    openModalPizza(id){
      this.$store.dispatch('products/changeOpenedPizza',id)
      document.getElementById('pizzaModalBtn').click()
    },
    async addToCart (item) {
      this.is_loading = true
      await this.$axios.post(`/api/cart/add_to_cart`,
        {
          session_id:this.$auth.$storage.getCookie('session_id'),
          item:item,
          selected_size:0,
          weight:0,
          units:this.units,
          city_id:this.$auth.$storage.getCookie('city_id'),
          is_meat: item.category.is_meat
        })
      await this.$store.dispatch('cart/fetchCart')
      this.is_loading = false
      this.$fb.track('AddToCart',{
        value: this.item.prices.find(x => x.city === this.$auth.$storage.getCookie('city_id')).price,
        currency: 'RUB',
        contents: [
          {
            id: this.item.id,
            quantity: 1
          }
        ],
        content_ids: this.item.id,
      });
    },

  },
  computed:{
    total_units(){
      return this.min_unit * this.units
    }
  }
}
</script>


