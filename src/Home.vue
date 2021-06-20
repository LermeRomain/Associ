<template>

  <section id="content">
    <router-view></router-view>
    <Banner />
    <About />
    <Services />
    <Video />
    <Lancement />
    <Retour />
    <creationFooter />
    <login />
    <Arrow />
  </section>

</template>

<script>
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Video from './components/Video'
import Lancement from './components/Lancement'
import Retour from "./components/Retour";
import Arrow from './components/Arrow'
import Login from "./components/login";
import creationFooter from "./components/creationFooter";


export default {
  name: 'App',
  components:{
    Retour,
    Lancement,
    Video,
    Login,
    Banner,
    About,
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
