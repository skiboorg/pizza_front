<template>
  <div>
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
    import Header from '@/components/global/Header'
    import Footer from '@/components/global/Footer'

    export default {
        data:function(){
            return{
            }
        },
        components:{
            Header,
            Footer


        },
        methods: {

        },
    }
</script>
