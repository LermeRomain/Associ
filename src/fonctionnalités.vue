<template>
  <section id="content">
    <TableauBord />
    <Video />
    <Charme />
  </section>
</template>

<script>

import Video from "./components/Video";
import TableauBord from "./components/TableauBord";
import Charme from "./components/Charme";



export default {
  name: 'fonctionnalité',
  components:{
    Charme,
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
