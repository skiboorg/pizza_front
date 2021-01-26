<template>
  <div class="about-page-block map">
    <div class="about-page-block__map">
      <client-only>
        <yandex-map
          :coords="coords"
          class="mb-35"
          :class="'ymapContanerHidden'"
          zoom="14"
          style="width: 100%; height: 100%; padding: 0"
          :cluster-options="{ 1: {clusterDisableClickZoom: true} }"
          :controls="['trafficControl']"
          map-type="map">
          <ymap-marker
            markerId="1"
            marker-type="Placemark"
            :coords="coords">
          </ymap-marker>
        </yandex-map>
      </client-only>
    </div>
    <div class="about-page-block__text">
      <h3>Мы находимся по адресу:</h3>
      <p @click="coords=[66.088411, 76.662433],selectedAddress=1"  :class="{'link-active':selectedAddress===1}" class="mb-30 c-pointer">Новый Уренгой, ул.Железнодорожная д.12</p>
      <h4>Другие наши кафе по адресам:</h4>
      <p @click="coords=[62.236750, 74.532249],selectedAddress=2" class="mb-10 c-pointer" :class="{'link-active':selectedAddress===2}">Когалым, Кирова 9</p>
      <p @click="coords=[63.198711, 75.451836],selectedAddress=3" class="mb-10 c-pointer" :class="{'link-active':selectedAddress===3}">Ноябрьск, Дзержинского 12б</p>
      <p @click="coords=[63.203002, 75.475705],selectedAddress=4"class="mb-10 c-pointer" :class="{'link-active':selectedAddress===4}">Ноябрьск, Магистральная 117в</p>
      <h4>Свяжитесь с нами</h4>
      <div class="about-page-block__phone">
        <img src="/red-phone-icon.png" alt="">
        <p class="mb-10"><a href="tel:+79320984040">+7 (932) 098-40-40</a></p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props:['title'],
  data() {
    return {
      coords:[66.088411, 76.662433],
      selectedAddress:1,
    };
  }
}
</script>


