<template>
  <section id="content">
    <Video />
  </section>
</template>

<script>

import Video from "./components/Video";



export default {
  name: 'Fonctionnalité',
  components:{
    Video,
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
