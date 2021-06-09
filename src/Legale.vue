<template>

  <section id="content">
    <Header />
    <Banner />
    <Sign />
  </section>

</template>

<script>
import Header from './components/Header'
import Banner from "@/components/Banner";
import Sign from "@/components/Sign";



export default {
  name: 'Legale',
  components:{
    Sign,
    Banner,
    Header
  }
}

</script>



<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
  font-family: 'Ubuntu', sans-serif;
}

</style>
