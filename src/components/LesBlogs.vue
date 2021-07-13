<template>
  <div class="container-fluid">
    <div class="container-fluid" style="margin-top: 70px">
      <h1 class="col-md-9 offset-md-1">
        Découvrez nos conseils et astuces pour progesser !
      </h1>
    </div>

    <div class="container-fluid">

    </div>

    <div class="container-fluid">
      <div class=" row offset-1">
        <div class="col-md-3">
          <a href="https://associ.medium.com/comment-cr%C3%A9er-un-business-plan-bee6497e34f7"
             target="_blank" rel="dofollow">
            <div class="block">
              <div>
                <img src="../assets/blogs/1.svg" alt="illustrations theme blog">
              </div>
              <h2>Comment faire un business plan ?</h2>
            </div>
            <p>Temps de lecture : <span>5-10 minutes</span></p>
            <p>Catégorie : <span>Financement</span></p>
          </a>
        </div>
        <div class="col-md-3 offset-md-1">
          <a href="https://associ.medium.com/cr%C3%A9er-son-association-quand-on-a-moins-de-18-ans-bb620955f835" target="_blank" rel="dofollow">
          <div class="block">
            <div>
              <img src="../assets/blogs/2.svg" alt="illustrations theme blog">
            </div>
            <h2>Créer son association quand on a
              moins de 18 ans</h2>
          </div>
          </a>
          <p>Temps de lecture : <span>5 minutes</span></p>
          <p>Catégorie : <span>Solution</span></p>
        </div>
        <div class="col-md-3 offset-md-1">
          <a href="https://associ.medium.com/3-choses-%C3%A0-savoir-pour-la-cr%C3%A9ation-dassociation-e7462ba77986" target="_blank" rel="dofollow">
          <div class="block">
            <div>
              <img src="../assets/blogs/3.svg" alt="illustrations theme blog">
            </div>
            <h2>3 choses à savoir pour
              la création d'association </h2>
          </div>
          </a>
          <p>Temps de lecture : <span>15 minutes</span></p>
          <p>Catégorie : <span>Savoirs</span></p>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class=" row offset-1">
        <div class="col-md-3">
          <a href="https://associ.medium.com/ressources-une-liste-doutils-pour-votre-association-d8e285402f2a" target="_blank" rel="dofollow">
          <div class="block">
            <div>
              <img src="../assets/blogs/4.svg" alt="illustrations theme blog">
            </div>
            <h2>Ressources utiles</h2>
          </div>
          </a>
          <p>Temps de lecture : <span>5-10 minutes</span></p>
          <p>Catégorie : <span>Savoirs</span></p>
        </div>
        <div class="col-md-3 offset-md-1">
          <div class="block">
            <div>
              <img src="../assets/blogs/5.svg" alt="illustrations theme blog">
            </div>
            <h2>Pourquoi créer son association ?</h2>
          </div>
          <p>Temps de lecture : <span>10 minutes</span></p>
          <p>Catégorie : <span>Savoirs</span></p>
        </div>
        <div class="col-md-3 offset-md-1">
          <a href="https://associ.medium.com/communaut%C3%A9-discord-dassoci-838162937c84" target="_blank" rel="dofollow">
          <div class="block">
            <div>
              <img src="../assets/blogs/6.svg" alt="illustrations theme blog">
            </div>
            <h2>La communauté sur Discord</h2>
          </div>
          </a>
          <p>Temps de lecture : <span>5 minutes</span></p>
          <p>Catégorie : <span>Réseaux sociaux</span></p>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
         <button onclick="window.location.href ='https://drive.google.com/file/d/1Nek3VsJNKDJ0E5xSBA9TKV8rtuXEtMbE/view?usp=sharing'"  class="btn offset-md-8">Télécharger le guide de création</button>
      </div>
    </div>

    <div class="container-fluid background2">
      <div class="row" style="margin-top: 150px; margin-right: 0px">
        <div class="col-12 col-md-11 offset-md-1" style="margin-top: 15%">
          <h3>Suivez notre actualité !</h3>
          <div class="row">
            <div class="col-md-2 offset-1 offset-md-0">
              <img class="rs" src="../assets/footer/insta.svg" alt="logo insta">
            </div>
            <div class="col-md-2 offset-1">
              <img class="rs" src="../assets/footer/tiktok.svg" alt="logo tiktok">
            </div>
            <div class="col-md-2 offset-1">
              <img class="rs" src="../assets/footer/tiktok.svg" alt="logo tiktok">
            </div>
            <div class="col-md-2 offset-1">
              <img class="rs" src="../assets/footer/insta.svg" alt="logo insta">
            </div>
          </div>
        </div>
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

.container-fluid {
  background-color: #F9F9F9;
  padding: 0px 0px 0px 0px;
}

.row{
  margin-right: 0px;
}

.background2 {
  background-image: url("../assets/Backrose2.svg");
  height: 713px;
  width: 100%;
}

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

h2 {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
}

h3{
  font-family: Roboto;
  font-weight: bold;
  font-size: 58px;
  color: #FFFFFF;
  margin-top: 30px;
}

p {
  font-family: Roboto;
  font-size: 20px;
  color: #400186;
}

span {
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  color: #400186;
}

.btn {
  padding: 16px 24px;
  background: #400186;
  border-radius: 50px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  border: 2px solid #400186;
  margin-bottom: 50px;
  margin-top: 50px;
}

.btn:hover{
  background: none;
  color: #400186;
  border-color: #400186;
}

img {
  height: 80%;
  width: 80%;
  margin-left: 30px;
  margin-top: 10%;
}

.rs{
  height: 52px;
}

a {
  text-decoration: none;
  color: black;
}

</style>