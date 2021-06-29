<template>

  <section id="content">
    <router-view></router-view>
    <Banner />
    <Services />
    <Blog />
    <creationFooter />
    <Arrow />
  </section>

</template>

<script>
import Blog from "@/components/Blog";
import Banner from './components/Banner'
import Services from './components/Services'
import Arrow from './components/Arrow'
import creationFooter from "./components/creationFooter";


export default {
  name: 'App',
  components:{
    Blog,
    Banner,
    Services,
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
