<template>

  <section id="content">
    <Header />
    <Banner />
    <Mentions />
  </section>

</template>

<script>
import Header from './components/Header'
import Banner from "@/components/Banner";
import Mentions from "@/components/Mentions";



export default {
  name: 'Legale',
  components:{
    Mentions,
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
