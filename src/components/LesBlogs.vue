<template>
  <div>
    <div class="container-fluid" style="margin-top: 100px">
      <h1 class="col-md-9 offset-md-1">
        Découvrez nos conseils et astuces pour progesser !
      </h1>
    </div>

    <div class="container-fluid">

    </div>

    <div class="container-fluid">
      <div class=" row offset-1">
        <div class="col-md-3">
          <div class="block">
            <div>
              <img src="../assets/blogs/1.svg">
            </div>
            <h2>Comment faire un business plan ?</h2>
          </div>
          <p>Temps de lecture : <span>5-10 minutes</span></p>
          <p>Catégorie : <span>Financement</span></p>
        </div>
        <div class="col-md-3 offset-md-1">
          <div class="block">
            <div>
              <img src="../assets/blogs/2.svg">
            </div>
            <h2>Créer son association quand on a
              moins de 18 ans</h2>
          </div>
          <p>Temps de lecture : <span>5 minutes</span></p>
          <p>Catégorie : <span>Solution</span></p>
        </div>
        <div class="col-md-3 offset-md-1">
          <div class="block">
            <div>
              <img src="../assets/blogs/3.svg">
            </div>
            <h2>3 choses à savoir pour
              la création d'association </h2>
          </div>
          <p>Temps de lecture : <span>15 minutes</span></p>
          <p>Catégorie : <span>Savoirs</span></p>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class=" row offset-1">
        <div class="col-md-3">
          <div class="block">
            <div>
              <img src="../assets/blogs/4.svg">
            </div>
            <h2>Ressources utiles</h2>
          </div>
          <p>Temps de lecture : <span>5-10 minutes</span></p>
          <p>Catégorie : <span>Savoirs</span></p>
        </div>
        <div class="col-md-3 offset-md-1">
          <div class="block">
            <div>
              <img src="../assets/blogs/5.svg">
            </div>
            <h2>Pourquoi créer son association ?</h2>
          </div>
          <p>Temps de lecture : <span>10 minutes</span></p>
          <p>Catégorie : <span>Savoirs</span></p>
        </div>
        <div class="col-md-3 offset-md-1">
          <div class="block">
            <div>
              <img src="../assets/blogs/6.svg">
            </div>
            <h2>La communauté sur WhatsApp</h2>
          </div>
          <p>Temps de lecture : <span>5 minutes</span></p>
          <p>Catégorie : <span>Réseaux sociaux</span></p>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <button class="btn offset-md-8">Télécharger le guide de création</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LesBlogs"
}
</script>

<style scoped>

h1 {
  font-family: Roboto;
  font-weight: bold;
  font-size: 58px;
}

.col-md-3 {
  margin-top: 50px;
}

.block {
  /* Shadow_step */
  border: 3px solid #400186;
  box-sizing: border-box;
  border-radius: 25px;
  width: auto;
  height: 432px;
}

h2{
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}

p{
  font-family: Roboto;
  font-size: 20px;
  color: #400186;
}

span{
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  color: #400186;
}

.btn{
  padding: 16px 24px;
  background: #400186;
  border-radius: 50px;
  font-family: Roboto;
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 50px;
  margin-top: 50px;
}

img{
  height: 90%;
  width: 90%;
  margin-left: 15px;
  margin-top: 25%;
}

a{
  text-decoration:none;
}

</style>