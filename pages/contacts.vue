<template>
  <div class="delivery-page">
    <div class="container">
      <h1 class="home-page-category__title">Контакты</h1>
      <div class="mb-50">
        <p>Фактический адрес: 629307, Новый Уренгой, ул.Железнодорожная, 12<br>
Электронная почта: info@meat-coal.ru<br>
Телефоны: +7 (3494) 29 24 07 +7 (3494) 29 25 07.<br><br>

Реквизиты:<br>
ИП Красюкова Александра Михайловна<br>
ИНН 860702349353/ ОГРНИП 31889010017895<br>
Юридический адрес: 129123, г. Москва, 115533, г.Москва, 1-ый Нагатинский проезд, 11-434</p>
      </div>
      <Map :title="'Приходите в наше уютное кафе'"/>
    </div>

  </div>
</template>

<script>
import Map from '@/components/global/Map'
export default {
  async fetch({store}){
    await store.dispatch('city/fetchCity')
    await store.dispatch('cart/fetchCart')
  },
  scrollToTop: true,
  components:{
    Map
  },
  data() {
    return {
    };
  }
}
</script>



