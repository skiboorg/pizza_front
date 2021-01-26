<template>
  <div class="container">
    <div class="lk-wrapper">
      <p class="lk-amount">Баллов начислено: 653</p>
      <el-tabs v-model="activeTab" >
        <el-tab-pane label="Личные данные" name="tab1">
          <div class="lk-tab-row personal-row">
            <p>Имя</p>
            <el-input placeholder="Введите Ваше имя" @input="editField='name'" :class="{'in-edit-mode':!userData.name}" v-model="userData.name"></el-input>
            <el-button @click="userButtonClick('name')" plain>
              {{userData.name ? editField === 'name'? 'Сохранить' :'Изменить' : 'Добавить'}}
            </el-button>
          </div>
          <div class="lk-tab-row personal-row">
            <p>Номер телефона</p>
            <p class="is-empty">+7(xxx) xxx-xx-xx</p>
          </div>
          <div class="lk-tab-row personal-row">
            <p>Email</p>
            <el-input placeholder="Введите e-mail" @input="editField='email'" :class="{'in-edit-mode':!userData.email}" v-model="userData.email"></el-input>
             <el-button @click="userButtonClick('email')" plain>
              {{userData.email ? editField === 'email'? 'Сохранить' :'Изменить' : 'Добавить'}}
            </el-button>

          </div>
          <div class="lk-tab-row personal-row">
            <p>Дата рождения</p>
             <el-input placeholder="ДД.ММ.ГГГГ" @input="editField='birthday'" :class="{'in-edit-mode':!userData.birthday}" v-model="userData.birthday"></el-input>
             <el-button @click="userButtonClick('birthday')" plain>
              {{userData.birthday ? editField === 'birthday'? 'Сохранить' :'Изменить' : 'Добавить'}}
            </el-button>

          </div>

        </el-tab-pane><!-- tab1-->
        <el-tab-pane label="Адреса доставки" name="tab2">
          <div class="lk-rows">
            <div class="lk-tab-row address-row" v-for="(item,index) in userAddress" :key="item.id">
             <p>{{item.address}}</p>
             <p><i class="el-icon-delete"></i></p>
           </div>
          </div>
          <div class="lk-new-address" :class="{'newAddressActive':newAddressActive}">
            <el-input v-model="newAddress" class="in-edit-mode" placeholder="Новый адрес доставки"></el-input>
             <el-button type="primary" @click="addNewAddressClick">{{newAddressActive ? 'Сохранить новый адрес ' : 'Добавить новый адрес'}}</el-button>
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
  data() {
    return {
      activeTab:'tab1',
      editField:null,
      userData:{
        name:'Иван',
        email:null,
        birthday:null,
      },
      newAddressActive:false,
      newAddress:null,
      userAddress:[
        {id:1,address:'Новый Уренгой, Железнодорожная 43'},
        {id:2,address:'Новый Уренгой, Железнодорожная 45'},
        {id:3,address:'Новый Уренгой, Железнодорожная 47'},
      ]

    };
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    userButtonClick(field){
      this.userData[field] = null
      this.editField = field
    },
    addNewAddressClick(){
      this.newAddressActive  = !this.newAddressActive
    }
  }
}
</script>


