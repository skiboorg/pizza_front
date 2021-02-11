<template>
  <div class="container">
    <div class="lk-wrapper">
      <p class="lk-amount">Баллов начислено: {{$auth.user.bonuses}}</p>
      <el-tabs v-model="activeTab" >
        <el-tab-pane label="Личные данные" name="tab1">
          <div class="lk-tab-row personal-row">
            <p>Имя</p>
            <el-input placeholder="Введите Ваше имя"  @input="editField='fio'" :class="{'in-edit-mode':!userData.fio}" v-model="userData.fio"></el-input>

          </div>
          <div class="lk-tab-row personal-row">
            <p>Номер телефона</p>
            <p class="is-empty">{{userData.phone}}</p>
          </div>
          <div class="lk-tab-row personal-row">
            <p>Email</p>
            <el-input placeholder="Введите e-mail" @input="editField='email'" :class="{'in-edit-mode':!userData.email}" v-model="userData.email"></el-input>

          </div>
          <div class="lk-tab-row personal-row mb-30">
            <p @click="$auth.logout()">Дата рождения</p>
            <el-date-picker
              v-model="userData.birthday"
              type="date"
              :class="{'in-edit-mode':!userData.birthday}"
              placeholder="ДД.ММ.ГГГГ"
              format="dd/MM/yyyy"
              value-format="yyyy-MM-dd"
              default-value="2000-10-01">
            </el-date-picker>



          </div>
          <el-button plain @click="userDataChange">Изменить</el-button>
          <el-button type="primary" @click="userDataSave">Сохранить</el-button>

        </el-tab-pane><!-- tab1-->
        <el-tab-pane label="Адреса доставки" name="tab2">
          <div class="lk-rows">
            <div class="lk-tab-row address-row" v-for="item in $auth.user.addresses" :key="item.id">
              <p>
                <span v-show="item.street">ул.{{item.street}} </span>
                <span v-show="item.house">д.{{item.house}} </span>
                <span v-show="item.flat">кв.{{item.flat}} </span>
                <span v-show="item.podezd">п.{{item.podezd}} </span>
                <span v-show="item.code">код:{{item.code}} </span>
                <span v-show="item.floor">эт.{{item.floor}}</span>
                </p>
              <p><i @click="deleteAddress(item.id)" class="el-icon-delete"></i></p>
            </div>
          </div>
          <p class="mb-10">Добавить адрес</p>
          <div class="lk-new-address newAddressActive">
            <div class="checkout-form__group group-3-1">
            <el-input class="in-edit-mode " v-model="newAddress.street" placeholder="Улица"></el-input>
            <el-input class="in-edit-mode " v-model="newAddress.house" placeholder="Дом"></el-input>
          </div>
          <div class="checkout-form__group group-4">
            <el-input class="in-edit-mode " v-model="newAddress.flat" placeholder="Кв"></el-input>
            <el-input class="in-edit-mode " v-model="newAddress.podezd" placeholder="Подъезд"></el-input>
            <el-input class="in-edit-mode " v-model="newAddress.code" placeholder="Код двери"></el-input>
            <el-input class="in-edit-mode " v-model="newAddress.floor" placeholder="Этаж"></el-input>
          </div>
            <el-button type="primary" @click="userAddressSave">Сохранить</el-button>
          </div>


        </el-tab-pane><!-- tab2-->
        <el-tab-pane label="Смена пароля" name="tab3">

        </el-tab-pane><!-- tab3-->
      </el-tabs>
    </div>

  </div>
</template>

<script>
export default {
  async fetch({store}){
    await store.dispatch('city/fetchCity')
    await store.dispatch('cart/fetchCart')
  },
  data() {
    return {
      activeTab:'tab1',
      editField:null,
      newAddress:{
          street:null,
          house:null,
          flat:null,
          podezd:null,
          code:null,
          floor:null
      },
      userData:{
        fio:this.$auth.user.fio,
        email:this.$auth.user.email,
        birthday:this.$auth.user.birthday,
        phone:this.$auth.user.phone,
      },

    };
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    userDataChange(){
      this.userData.fio = null
      this.userData.email = null
      this.userData.birthday = null
    },
    async userDataSave(){
      const responce = await this.$axios.post('/api/user/update',{userData:this.userData})
      console.log(responce.data)
      this.$auth.fetchUser()
    },
    async userAddressSave(){
      const responce = await this.$axios.post('/api/user/add_address',this.newAddress)
      console.log(responce.data)
      this.$auth.fetchUser()
    },
    async deleteAddress(id){
      const responce = await this.$axios.delete(`/api/user/delete_address/${id}`)

      this.$auth.fetchUser()
    },
  }
}
</script>


