<template>
  <div class="about-page">
    <div class="container">
      <div class="about-page-title">
        <div class="about-page-title__num"></div>
        <div class="about-page-title__text">
          <h1><p>9 причин</p><p>выбрать кафе</p><p>Мясо на углях</p></h1>
        </div>
      </div>
      <div class="about-page-img">
        <img src="/aboutPage/1.jpg" alt="">
      </div>
      <div class="about-page-block">
        <div class="about-page-block__text">
          <h3>1. Здоровая еда</h3>
          <p>Блюда готовим только из свежих продуктов. Не используем замороженные полуфабрикаты,
            соевые добавки и усилители вкуса. Сами делаем заготовки, маринуем мясо, готовим тесто, пластуем рыбу.
          </p>
          <h3>2. Безопасность</h3>
          <p>Пищевые продукты сертифицированы, а блюда готовятся только в соответствии с действующими нормами СанПин.</p>

        </div>
        <div class="about-page-block__img">
          <img src="/aboutPage/2.jpg" alt="">
        </div>
      </div>
      <div class="about-page-block simple-block">
        <div class="about-page-block__text">
          <h3>3. Открытая кухня</h3>
        </div>
        <div class="about-page-block__text">
          <p>Не боимся показать нашу чистую кухню — вы можете наблюдать, как мы готовим на углях сочные шашлыки, пиццу в печах, пироги и катаем свежие роллы.</p>
        </div>
      </div>
      <div class="about-page-img">
        <img src="/aboutPage/3.jpg" alt="">
      </div>
      <div class="about-page-block">
        <div class="about-page-block__text">
          <h3>4. Более 100 блюд в меню</h3>
          <p>Большая семья или хотите вкусно и сытно накормить компанию на торжестве? Вам повезло –
            в меню представлены шашлыки, люля-кебаб, пицца, роллы, пироги, закуски, рыба, алкогольные и безалкогольные напитки.
          </p>
          <h3>5. Выверенная рецептура</h3>
          <p>Мы годами отбирали рецепты. Вкус наших блюд понравится большинству гостей, ведь мы добились
            сбалансированного и неповторимого вкуса, используем дорогие индийские, въетнамские специи и не экономим ни на чем.</p>

        </div>
        <div class="about-page-block__img">
          <img src="/aboutPage/4.jpg" alt="">
        </div>
      </div>
      <div class="about-page-block image-first">
        <div class="about-page-block__img">
          <div class="about-page-block__img--decor">
            <img src="/aboutPage/delivery.svg" alt="">
          </div>
          <img src="/aboutPage/del.jpg" alt="">
        </div>
        <div class="about-page-block__text">
          <h3>6. Быстрая и безопасная доставка</h3>
          <p>Не нужно ждать 1.5-2 часа свежеприготовленную еду — доставим заказ за 55 минут в термосумке. С заботой о
            здоровье предусмотрена бесконтактная доставка.
          </p>
          <h3>7. Демократичные цены</h3>
          <p>Следим за тем, чтобы наши цены приятно удивляли, чтобы вы могли насладиться любимыми блюдами из нашего ассортимента.</p>

        </div>

      </div>
      <div class="about-page-block">
        <div class="about-page-block__text">
          <h3>8. Повара высшей категории</h3>
          <p>Для вас готовят профессиональные повара, с широкой рецептурной базой и любовью к своему делу.</p>
          <div class="about-page-block__faces">
            <div class="about-page-block__face">
              <img src="/aboutPage/p1.jpg" alt="">
              <div class="about-page-block__face--name">
                <p class="about-page-block__face--name-name">Иван</p>
                <p class="about-page-block__face--name-work">Пиццайоло</p>
              </div>
            </div>
             <div class="about-page-block__face">
              <img src="/aboutPage/p2.jpg" alt="">
                <div class="about-page-block__face--name">
                <p class="about-page-block__face--name-name">Сергей</p>
                <p class="about-page-block__face--name-work">Шашлычник</p>
              </div>
            </div>
             <div class="about-page-block__face">
              <img src="/aboutPage/p3.jpg" alt="">
                <div class="about-page-block__face--name">
                <p class="about-page-block__face--name-name">Мария</p>
                <p class="about-page-block__face--name-work">Сушист</p>
              </div>
            </div>
          </div>

        </div>
        <div class="about-page-block__img">
          <img src="/aboutPage/5.jpg" alt="">
        </div>
      </div>
      <div class="about-page-block image-first">
        <div class="about-page-block__img">


          <img src="/aboutPage/6.jpg" alt="">
        </div>
        <div class="about-page-block__text">
          <h3>9. Уютное кафе</h3>
          <p>150 квадратных метров обеденной зоны и 20 столов, парковка на 20+ автомобилей, вежливый и дружелюбный персонал.
          </p>
          <p class="font-20 text-bold mb-50">Будем рады видеть вас в нашем кафе!</p>
          <div class="about-page-block__images">
            <img src="/aboutPage/6-1.jpg" alt="">
            <img src="/aboutPage/6-2.jpg" alt="">

          </div>


        </div>

      </div>
      <Map id="contacts" />
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


