<template>
  <div class="font">
    <div class="container-fluid background">
      <div class="row">
        <div class="col-md-6 offset-md-1">
          <h1>
            Associ, accompagnateur des jeunes ambitieux
          </h1>
          <p>
            Depuis sa création, Associ a toujours eu la volonté d’accompagner les adolescents dans la création de leur
            association, peut importe l’âge. Chez Associ, c’est votre détermination qui fait votre caractère (entre
            nous,
            c’est ce qu’on aime).
          </p>
        </div>
        <div class="col-md-5">
          <img src="../assets/Conference.svg" alt="logo pour les conference" class="d-none d-md-block" style="width: 100%; margin-top: 100px">
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <h2 class="offset-md-1">
        Communiqué de presse
      </h2>
      <div class="row offset-md-1">
        <img class="col-md-7" src="../assets/Pitch.svg" alt="logo pour les pitch" style="width: 100%">
      </div>
    </div>
    <h2 class="offset-md-1">
      Dossier de presse
    </h2>
    <div class="container-fluid background2">
      <div class="row">
        <div class="col-md-5">
          <img src="../assets/Conference.svg" alt="logo pour les conference" class="d-none d-md-block" style="width: 100%; margin-top: 100px">
        </div>
        <div class="col-md-6 offset-md-1" style="margin-top: 15%">
          <p>
            Apprenez en plus sur Associ, son univers, ses ambitions et surtout ses valeurs.<br><br>

            Vous trouverez ici toutes ces informations essentielles à propos de notre entreprise.
          </p>
          <div>
            <btn>Télécharger</btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Communiquer"
}
</script>

<style scoped>

.font{
  background-color: #F9F9F9;
}
.container-fluid {
  height: 768px;
}

.background {
  background-image: url("../assets/Backrose.svg");
}

.background2 {
  background-image: url("../assets/Backrose2.svg");
  height: 713px;
}


h1 {
  color: #FFFFFF;
  font-size: 58px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 100px;
}

@media screen and (max-width: 768px){
  h1{
    font-size: 45px;
  }
}

P {
  color: #FFFFFF;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 20px;
  margin-bottom: 50px;
}


h2 {
  color: black;
  font-size: 58px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
}

btn {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 24px;
  background: #FFFFFF;
  border-radius: 50px;
  color: #400186;
  border: 2px solid #FFFFFF;
}

btn:hover{
  border-color: #FFFFFF;
  color: #FFFFFF;
  background: none;
}

a{
  text-decoration:none;
}
</style>