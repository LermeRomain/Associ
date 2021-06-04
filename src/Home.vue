<template>

  <section id="content">
    <router-view></router-view>
    <Banner />
    <About />
    <Services />
    <Video />
    <login />
    <Arrow />
  </section>

</template>

<script>
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Video from './components/Video'
import Arrow from './components/Arrow'
import Login from "./components/login";


export default {
  name: 'App',
  components:{
    Video,
    Login,
    Banner,
    About,
    Services,
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
