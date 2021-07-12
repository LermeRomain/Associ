<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-1">
        <h1>Le blog</h1>
      </div>
    </div>
    <div class="container-fluid row">
      <div class="col-md-3 offset-md-1">
        <h2>Communauté Discord</h2>
        <div class="block">
          <div>
            <p class="title1" style="float: right; color: #FD4C6F; margin-right: 16px">Financement</p>
          </div>
          <div>
            <img src="../assets/blog/CommuDiscord.svg" alt="image representant la communauté discord">
          </div>
        </div>
        <p>Astuces, nouveaux collaborateurs et sujets de discussions sont tous les éléments qui vous retrouverez dans la
          communauté Associ.</p>
        <a style="color: #404DEF; font-family: Roboto" rel="dofollow">Voir l'article ></a>
      </div>
      <div class="col-md-3">
        <h2>3 chose à savoir ?</h2>
        <div class="block">
          <div>
            <p class="title1" style="float: right; color: #404DEF; margin-right: 16px">Communauté</p>
          </div>
          <div>
            <img src="../assets/blog/3choses.svg" alt="image representant les 3 choses principales pour une association">
          </div>
        </div>
        <p>Le domaine associatif n’est pas le domaine le plus complexe en matière
          de compréhension. Dans cet article, nous allons vous exposer trois points clés à
          connaître en matière de création d’association.</p>
        <a style="color: #404DEF; font-family: Roboto"
           href="https://associ.medium.com/3-choses-%C3%A0-savoir-pour-la-cr%C3%A9ation-dassociation-e7462ba77986"
           target="_blank" rel="dofollow">Voir l'article ></a>
      </div>
      <div class="col-md-3">
        <h2>Moins de 18 ans ?</h2>
        <div class="block">
          <div>
            <p class="title1" style="float: right; color: #404DEF; margin-right: 16px">Communauté</p>
          </div>
          <div>
            <img src="../assets/blog/moin18.svg" alt="image pour les personne mineurs dans une association">
          </div>
        </div>
        <p>Vous avez un projet d’associations mais vous n’êtes pas encore majeur ? Depuis 2017, La loi n°2017–86 permet
          maintenant aux mineurs de créer et d’administrer une association.
        </p>
        <a style="color: #404DEF; font-family: Roboto"
           href="https://associ.medium.com/cr%C3%A9er-son-association-quand-on-a-moins-de-18-ans-bb620955f835"
           target="_blank" rel="dofollow">Voir
          l'article ></a>
      </div>
    </div>
    <div class="container-fluid">
      <router-link to="/blogs">
        <button class="btn offset-md-5">Découvrir le blog</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style scoped>

.container-fluid {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-right: 0px;
  background-color: #F9F9F9;
}

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */
  margin-top: 16px;

  /* Text */

  color: #093046;
}

h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 58px;
  line-height: 101.8%;
  /* identical to box height, or 59px */

  letter-spacing: -0.01em;

  /* Text */

  color: #093046;

}

h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 101.8%;
  /* identical to box height, or 59px */

  letter-spacing: -0.01em;

  /* Text */

  color: #400186;
}


.btn {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: #FFFFFF;
  line-height: 100.8%;

  background: #400186;
  border-color: #400186;
  border: 2px solid #400186;
  border-radius: 40px;
  padding: 16px 24px;

}

button:hover {
  text-decoration-line: none;
  background: #FFFFFF;
  color: #400186;
  box-sizing: border-box;
  border-radius: 50px;
}

.col-md-3 {
  margin-top: 50px;
  margin-right: 50px;
  padding-left: 0px;
}

.block {
  background: #FFFFFF;
  /* Shadow_step */

  box-shadow: 0px 10px 24px 2px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  width: auto;
  height: 265px;
}

img {
  margin-left: 70px;
  height: auto;
  width: auto;
}

a {
  text-decoration: none;
}
</style>