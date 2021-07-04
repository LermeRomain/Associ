<template>
  <section id="content">
    <TableauBord />
    <Video />
    <Conquis />
  </section>
</template>

<script>

import Video from "./components/Video";
import TableauBord from "./components/TableauBord";
import Conquis from "./components/Conquis";



export default {
  name: 'Fonctionnalité',
  components:{
    Conquis,
    TableauBord,
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
