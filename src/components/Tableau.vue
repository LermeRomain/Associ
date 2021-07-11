<template>
  <div class="container-fluid">
    <div class="row offset-md-1">
      <div class="col-md-12">
        <h2>Bientôt disponible</h2>
        <h1>Tableau de bord</h1>
      </div>
    </div>
    <div class="row offset-md-1">
      <div class="col-md-5 d-none d-lg-block">
        <p1>Notre outil de gestion pour <span>tous types d’associations</span></p1>
        <img class="dash" src="../assets/Dashboard.svg">
      </div>
      <div class="col-md-4 offset-md-2">
        <div class="article">
          <img src="../assets/click.svg">
          <h3 style="line-height: 40px">Simple</h3>
          <p>Un e-mail, un mot de passe et c’est parti.
            Démarrez simplement la création de votre association.</p>
        </div>
        <div class="article">
          <img src="../assets/coeur.svg">
          <h3 style="line-height: 40px">Agréable</h3>
          <p>Une interface de synthèse simple pour vous faciliter dans vos tâches quotidienne.</p>
        </div>
        <div class="article">
          <img src="../assets/etiquette.svg">
          <h3 style="line-height: 40px">Personnalisé</h3>
          <p>Une solution pensée pour tous. Il est important que chacun d’entre vous puisse s’exprimer.</p>
        </div>
        <div class="row">
        <router-link to="/fonctionnalités"><button class="btn" type="button">Fonctionnalités</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tableau"
}
</script>

<style scoped>

.container-fluid {
  padding-top: 100px;
  background-color: #F9F9F9;
}

h2 {
  font-size: 32px;
  font-family: Roboto;
  background: -webkit-linear-gradient(right, #FD4C6F 60%, #400186);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1 {
  font-family: Roboto;
  font-weight: bold;
  font-size: 58px;
  margin-bottom: 24px;
  margin-top: 24px;
}

h3{
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
  line-height: 30px;
}

p{
  font-family: Roboto;
  font-size: 20px;
}

p1{
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
}

span{
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  color: #FD4C6F;
}

.btn {
  display: flex;
  margin-top: 7%;
  margin-bottom: 10px;
  background: #400186;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: center;
  border-color: #400186;
  border: 2px solid #400186;

  color: #FFFFFF;
}


.btn:hover {
  text-decoration-line: none;
  background: #FFFFFF;
  color: #400186;
  box-sizing: border-box;
  border-radius: 50px;
}

.btn1 {
  display: flex;
  margin-top: 7%;
  background: #FFFFFF;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: center;
  border: none;

  color: #400186;
}

img.dash{
  margin-right: auto;
  margin-bottom: 0px;
}

img {
  float: left;
  margin-right: 16px;
}

a{
  text-decoration:none;
}
</style>