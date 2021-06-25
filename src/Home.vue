<template>

  <section id="content">
    <router-view></router-view>
    <Banner />
    <Services />
    <Video />
    <Blog />
    <Lancement />
    <Retour />
    <creationFooter />
    <Arrow />
  </section>

</template>

<script>
import Blog from "@/components/Blog";
import Banner from './components/Banner'
import Services from './components/Services'
import Video from './components/Video'
import Lancement from './components/Lancement'
import Retour from "./components/Retour";
import Arrow from './components/Arrow'
import creationFooter from "./components/creationFooter";


export default {
  name: 'App',
  components:{
    Retour,
    Blog,
    Lancement,
    Video,
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
