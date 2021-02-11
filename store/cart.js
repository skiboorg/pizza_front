export const state = () => ({
  items:{  "id": 13,
    "pizza_constructors": [],
    "souces": [],
    "items": [],
    "total_price": 0,
    "total_bonuses": 0,
    "created_at": "2021-02-03T15:19:49.805297+03:00",
    "updated_at": "2021-02-03T15:19:49.805320+03:00",
    "client": null,
    "guest": 11},
  bonuses:0,
  promo:0


})

export const mutations = {
  setBonuses(state,data){
    state.bonuses = data
  },
  setPromo(state,data){
    state.promo = data
  },
  setCart(state,data){
    state.items = data
    console.log(state)
  }
}

export const actions = {
  async fetchCart({commit,state,dispatch}){
     let session_id = this.$auth.$storage.getCookie('session_id')
    console.log('session_id', session_id)
    if(session_id) {
      const responce = await this.$axios.get(`/api/cart/get_cart?session_id=${session_id}`)
      commit('setCart', responce.data)
      //commit('setCategories', cats.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i))
    }

  },
  eraseCart({commit,state}, data) {
    commit('setCart', { "id": 13,
    "pizza_constructors": [],
    "souces": [],
    "items": [],
    "total_price": 0,
    "total_bonuses": 0,
    "created_at": "2021-02-03T15:19:49.805297+03:00",
    "updated_at": "2021-02-03T15:19:49.805320+03:00",
    "client": null,
    "guest": 11})
    commit('setBonuses',0)
    commit('setPromo',0)
  },
  addBonuses({commit},data){
    commit('setBonuses',data)
  },
  addPromo({commit},data){
    commit('setPromo',data)
  },

}

export const getters = {
  getCart: (state) => state.items,
  getCartBonuses: (state) => state.bonuses,
  getCartPromo: (state) => state.promo

}

