<template>
  <div class="contacts-page">
    <div class="container">
      <Map :title="'Приходите в наше уютное кафе'"/>
    </div>

  </div>
</template>

<script>
import Map from '@/components/global/Map'
export default {
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


