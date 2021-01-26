<template>
  <div class="item-card">
    <div class="item-card__top">
      <img src="/ph.png" alt="">
    </div>
    <div class="item-card__bottom">
      <div class="item-card__title">
        <p>Шашлык</p>
        <el-tooltip  placement="top-end" effect="light">
          <div class="item-card__title--info-tooltip" slot="content"><p>К/Б/Ж/У</p><span>300/14/20/70</span></div>
          <el-button class="item-card__title--info-btn" type="text"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" fill="#F8F9FA"/>
            <path d="M12.2273 19H13.5682V10.2727H12.2273V19ZM12.9091 8.81818C13.4318 8.81818 13.8636 8.40909 13.8636 7.90909C13.8636 7.40909 13.4318 7 12.9091 7C12.3864 7 11.9545 7.40909 11.9545 7.90909C11.9545 8.40909 12.3864 8.81818 12.9091 8.81818Z" fill="#262626"/>
          </svg>
          </el-button>
        </el-tooltip>
      </div>
      <p class="item-card__ingridients">
        <span>Лаваш</span>
        <span>соус белый</span>
        <span>соус красный </span>
        <span>лук</span>
      </p>
      <div class="item-card__price">
        <p>1000р</p>
        <el-button type="primary" @click="openModal">Выбрать</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  props:['title'],
  data() {
    return {

    };
  },
  methods:{
    openModal(){
      document.getElementById('itemModalBtn').click()
    }
  }
}
</script>


