export const state = () => ({
  items:null,
  main_city:null,
  city_info:null,
})

export const mutations = {
  setCity(state,data){
    state.items = data
  },
  setMainCity(state,data){
    state.main_city = data
  },

}

export const actions = {
  async fetchCity({commit,state,dispatch}){
    console.log('city items', state.items)
    const city_id = this.$auth.$storage.getCookie('city_id')
    console.log('city main_city', city_id)
    if(!state.items){
      console.log('fetching cities')
      const responce = await this.$axios.get(`/api/items/get_cities`)
      console.log(responce.data)
      if (!city_id){
         dispatch('changeMainCity',responce.data.find(x => x.is_main === true).id)
      }
      commit('setCity',responce.data)
    }

  },
  changeMainCity({commit}, data) {
    let city_in_cookie = this.$auth.$storage.getCookie('city_id')
    if (city_in_cookie !== data){
      this.$auth.$storage.setCookie('city_id', data)
      commit('setMainCity', data)
      console.log('setMainCity',data)


    }
  }

}

export const getters = {
  getCity: (state) => state.items,
  getMainCity: (state) => state.main_city,

}

