<template>
  <div class="delivery-page">
    <div class="container">
      <h1 class="home-page-category__title">Доставка и оплата</h1>
      <div class="delivery-page-top">
        <div class="delivery-page-items">
          <div class="delivery-page-item">
            <p>ДОСТАВКА РАБОТАЕТ</p>
            <span>c 11:00 до 23:00</span>
          </div>
          <div class="delivery-page-item">
            <p>СУММА ЗАКАЗА</p>
            <span>от 100 руб.</span>
          </div>
          <div class="delivery-page-item">
            <p>ДОСТАВКА</p>
            <span>100 руб.</span>
          </div>
          <div class="delivery-page-item">
            <p>ВРЕМЯ ДОСТАВКИ</p>
            <span>55 минут</span>
          </div>


        </div>
        <div class="">
          <img class="mb-20" src="/delivery.jpg" alt="">
        </div>


      </div>

<!--      <p class="text-center text-bold delivery-page__time">Среднее время доставки 30 минут</p>-->
      <h3>Способы оплаты</h3>
      <div class="delivery-page__payments">
        <div class="text-center">
          <img src="/pay1.png" alt="">
          <p>Наличными курьеру</p>
        </div>
        <div class="text-center">
           <img src="/pay2.png" alt="">
          <p>Онлайн оплата на сайте</p>
        </div>
        <div class="text-center">
          <img src="/pay3.png" alt="">
          <p>Оплата картой курьеру</p>
        </div>



      </div>
      <div class="mb-50">

Если товар доставляется курьером, то оплата осуществляется наличными курьеру в руки, либо банковской картой через мобильный терминал.
        При получении товара обязательно проверьте комплектацию товара и наличие товарного чека.<br><br>


Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку
        Оплата заказа банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:<br><br>

<div class="delivery-page-logos">
  <img src="/aboutPage/mir.png" alt="">
  <img src="/aboutPage/visa.png" alt="">
  <img src="/aboutPage/mastercard.png" alt="">
  <img src="/aboutPage/jcb.png" alt="">
</div>
Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК.
        Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с
        использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного
        проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для проведения
        платежа также может потребоваться ввод специального пароля.<br><br>

Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации
        обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев,
        предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии
        с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.<br><br>
        В случае возникновения проблем с онлайн оплатой на сайте, звоните по номерам: +7 (3494) 29 24 07, +7 (3494) 29 25 07<br><br>
        Условия возврата товара указаны в <nuxt-link class="header-top-address__link" to="/rules">правилах оказания услуг</nuxt-link><br><br>
        Порядок обработки персональных данных указан в разделе <nuxt-link class="header-top-address__link" to="/policy">политика конфиденциальности</nuxt-link><br><br>

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


