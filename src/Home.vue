<template>

  <section id="content">
    <router-view></router-view>
    <Banner />
    <Seduire />
    <Tableau />
    <Blog />
    <creationFooter />
    <Arrow />
  </section>

</template>

<script>
import Blog from "@/components/Blog";
import Banner from './components/Banner'
import Arrow from './components/Arrow'
import creationFooter from "./components/creationFooter";
import Seduire from "./components/Seduire";
import Tableau from "./components/Tableau";


export default {
  name: 'App',
  components:{
    Tableau,
    Seduire,
    Blog,
    Banner,
    creationFooter,
    Arrow
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
