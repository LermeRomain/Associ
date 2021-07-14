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
          <img src="../assets/Conference.svg" alt="logo pour les conference" class="d-none d-md-block"
               style="width: 100%; margin-top: 100px">
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <h2 class="offset-md-1">
        Communiqué de presse
      </h2>
      <div class="row offset-md-1">
        <img class="col-md-6" src="../assets/Pitch.svg" alt="logo pour les pitch" style="width: 100%">
        <div class="col-md-4 offset-md-1">
          <img src="../assets/Communiqué.png" alt="communiqué de presse"
               style="width: 100%; border-radius: 25px;box-sizing: border-box; margin-top: 20px">
          <a href="https://drive.google.com/file/d/15lxPwrA1zknk4IBIZfrECr2qjQuREOKv/view?usp=sharing" target="_blank"><button class="btn1 offset-5">Télécharger</button></a>
        </div>
      </div>
    </div>
    <h2 class="offset-md-1">
      Dossier de presse
    </h2>
    <div class="container-fluid background2" style="margin-top: 5% ">
      <div class="row">
        <div class="col-md-5 offset-md-1">
          <img src="../assets/presse.png" alt="dossier de presse" class="d-none d-md-block"
               style="width: 378px;height: auto; margin-top: 100px; border-radius: 25px">
        </div>
        <div class="col-md-6" style="margin-top: 20%">
          <p>
            Apprenez en plus sur Associ, son univers, ses ambitions et surtout ses valeurs.<br><br>

            Vous trouverez ici toutes ces informations essentielles à propos de notre entreprise.
          </p>
          <div>
            <a href="https://drive.google.com/file/d/1DrNXgr_dFG2Zyst4yO6y02TWTv6-Jck3/view?usp=sharing" target="_blank"><btn>Télécharger</btn></a>
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

.font {
  background-color: #F9F9F9;
}

.background {
  background-image: url("../assets/Backrose.svg");
  height: 768px;
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

@media screen and (max-width: 768px) {
  h1 {
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

btn:hover {
  border-color: #FFFFFF;
  color: #FFFFFF;
  background: none;
}

.btn1 {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 24px;
  background: #400186;
  border-radius: 50px;
  color: #FFFFFF;
  border: 2px solid #400186;

  margin-top: 15px;
}

.btn1:hover {
  border-color: #400186;
  color: #400186;
  background: none;
}

a {
  text-decoration: none;
}
</style>