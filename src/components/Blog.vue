<template>
  <div class="container-fluid">
    <div class="row justify-content-around">
      <div class="col-12 col-md-6">
        <h1>Blog</h1>
        <p>Découvrez notre blog où vous y trouverez toutes les informations nécessaires à l’élaboration en amont de votre association !</p>
      </div>
      <div class="col-12 col col-md-4 active">
        <a href="https://associ-blog.000webhostapp.com/2021/06/bonjour-tout-le-monde">
        <img src="../assets/lecture.svg" class="float-left" alt="Responsive image" >
        <h2>Créer son association avant 18 ans</h2>
        <p>Vous avez un projet d’associations mais vous n’êtes pas encore majeur ?</p>
        </a>
      </div>
      <div class="col-12 col-md-4 active">
        <a href="https://associ-blog.000webhostapp.com/2021/06/bonjour-tout-le-monde-2">
        <img src="../assets/stat.svg" class="float-left" alt="Responsive image">
        <h2>Comment créer un business plan ?</h2>
        <p>Avant de rentrer dans le domaine du monde associatif, il vous faudra quelques éléments primordiaux à savoir.</p>
        </a>
      </div>
      <div class="col-12 col-md-6">
        <a href="https://associ-blog.000webhostapp.com/">
        <button>Découvrir le blog</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style scoped>

.container-fluid{
  margin-bottom: 10%;
}

p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */


  /* Text */

  color: #093046;
}

h2{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */


  /* Text */

  color: #093046;
}

p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */


  /* Text */

  color: #093046;
}

.active{
  background: #FFFFFF;
  /* Shadow_step */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  align-items: center;
  margin-top: 30px;
  text-align: center;
}

button{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: #FFFFFF;

  background: #404DEF;
  width: 50%;
  height: 90px;
  border-radius: 40px;
  margin-top: 10%;
  display: inline-block;
  margin-left: 50%;

}
a{
  text-decoration: none;
}

</style>