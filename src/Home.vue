<template>

  <section id="content">
    <router-view></router-view>
    <Banner />
    <Seduire />
    <Tableau />
    <Blog />
    <Conquis />
  </section>

</template>

<script>
import Blog from "@/components/Blog";
import Banner from './components/Banner'
import Seduire from "./components/Seduire";
import Tableau from "./components/Tableau";
import Conquis from "./components/Conquis";


export default {
  name: 'App',
  components:{
    Conquis,
    Tableau,
    Seduire,
    Blog,
    Banner
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
