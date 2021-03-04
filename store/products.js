export const state = () => ({
  categories:{},
  items:{},
  recommended_items:{},
  souses:{},
  openedPizza:0,
  openedMeat:0,
  banners:[]

})


export const mutations = {
  setCategories(state,data){
    state.categories = data
  },
  setSouses(state,data){
    state.souses = data
  },
  setItems(state,data){
    state.items = data
  },
  setRecommendedItems(state,data){
    state.recommended_items = data
  },
  setOpenedPizza(state,data){
    state.openedPizza = data
  },
  setOpenedMeat(state,data){
    state.openedMeat = data
  },
  setBanners(state,data){
    state.banners = data
  }
}

export const actions = {
  async fetchItems({commit,dispatch,}){
    let id = this.$auth.$storage.getCookie('city_id')
    let cats = []
    console.log('products main city', id)
    if(id) {
      const responce_souses = await this.$axios.get(`/api/items/get_souses_by_city?city_id=${id}`)
      commit('setSouses', responce_souses.data)
      const responce = await this.$axios.get(`/api/items/get_items_by_city?city_id=${id}`)
      for (let i of responce.data) {
        cats.push(i.category)
      }
      commit('setItems', responce.data)
      commit('setRecommendedItems', responce.data.filter(x => x.is_recommended))
      commit('setCategories', cats.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i))
    }


  },
  changeOpenedPizza({commit,state},data){
    commit('setOpenedPizza',data)
  },
  async setBannersAction({commit,state},data){
    if (state.banners.length===0){
      const responce = await this.$axios.get(`/api/items/get_banners`)
      commit('setBanners',responce.data)
    }

  },


}

export const getters = {
  getCategories: (state) => state.categories,
  getSouses: (state) => state.souses,
  getItems: (state) => state.items,
  //getMeatRecommendedItems: (state) => state.items.filter(x => x.is_for_meat),
  getRecommendedItems: (state) => state.recommended_items,
  getOpenedPizza: (state) => state.openedPizza,
  getOpenedMeat: (state) => state.openedMeat,
  getBanners: (state) => state.banners,
}

