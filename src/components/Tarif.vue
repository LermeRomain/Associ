<template>
  <div class="font">
    <div class="container-fluid background">
      <div class="row">
        <div class="offset-md-1" style="margin-top: 10%">
          <h1>
            Bientôt disponible
          </h1>
          <h2>
            Les fonctionnalités du tableau de bord
          </h2>
        </div>
        <img class="col-md-10 offset-md-1" src="../assets/offres.svg">
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 offset-md-1" style="margin-top: 50px">
          <div class="list-group" id="list-tab" role="tablist">
            <a @click.prevent="nextStep1(true)" class="list-group-item list-group-item-action active" id="list-home-list"
               data-toggle="list"
               href="#list-home" role="tab" aria-controls="home">Tableau de bord</a>
            <a @click.prevent="nextStep2(true)" class="list-group-item list-group-item-action" id="list-profile-list"
               data-toggle="list"
               href="#list-profile" role="tab" aria-controls="profile">Gestion des membres</a>
            <a @click.prevent="nextStep3(true)" class="list-group-item list-group-item-action" id="list-messages-list"
               data-toggle="list"
               href="#list-messages" role="tab" aria-controls="messages">Calendrier</a>
          </div>
        </div>
        <div style="margin-top: 30px">
          <img v-if="activeStep ==1" class="col-12" src="../assets/Dashboard2.svg" style="width: 829px;height: 585px">
          <img v-if="activeStep ==2" class="col-12" src="../assets/membres.svg" style="width: 829px;height: 585px">
          <img v-if="activeStep ==3" class="col-12" src="../assets/calendrier.svg" style="width: 829px;height: 585px">
        </div>
      </div>
    </div>

    <div class="container-fluid col-md-11 offset-md-1">
      <h3>
        Choisissez l’offre adaptés à vos besoins
      </h3>
    </div>

    <div class="container offset-md-2">
      <div class="row justify-content-around">
        <div class="box1 col-md-5">
          <h4>Gratuit</h4>
          <br>
          <img src="../assets/0€.svg">
          <br>
          <router-link to="/quizz">
            <button class="btn">Démarrer</button>
          </router-link>
          <br>
          <span>Pas d’abonnement ni d’engagement</span>
        </div>
        <div class="box1 col-md-5">
          <h4>Intense</h4>
          <br>
          <img src="../assets/6€.svg">
          <br>
          <button class="btn1">Rester informé</button>
          <br>
          <span>30 jours gratuits sans engagement</span>
        </div>
      </div>
    </div>

    <div class="container-fluid background2">
      <div class="row" style="margin-top: 150px">
        <div class="col-12 text-center" style="margin-top: 15%">
          <h2>Des questions ?</h2>
          <p1>
            Contactez-nous ou télécharger gratuitement notre guide de création
          </p1>
        </div>
        <div class="row offset-md-4">
          <router-link to="/contacter">
            <button class="btn" type="button">Contactez-nous</button>
          </router-link>
          <button class="btn" type="button">Télécharger le guide de création</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Tarif",

  data() {
    return {
      count: 1,
      activeStep: 1,
    };
  },

  methods: {
    nextStep1() {
        this.activeStep =1;
    },
    nextStep2() {
      this.activeStep =2;
    },
    nextStep3() {
      this.activeStep =3;
    },
  }
}
</script>

<style scoped>

.font {
  background-color: #F9F9F9;
}

.background {
  background-image: url("../assets/Backrose.svg");
  height: 763px;
  margin-bottom: 250px;
}

.background2 {
  background-image: url("../assets/Backrose2.svg");
  height: 713px;
}

h1 {
  color: #FFFFFF;
  font-size: 32px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 50px;
}

h2 {
  color: #FFFFFF;
  font-size: 58px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 50px;
}

h3 {
  color: black;
  font-size: 58px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 50px;
}

h4 {
  color: black;
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
  margin: 20px;
}

P {
  color: #FFFFFF;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 20px;
  margin-bottom: 50px;
}

P1 {
  color: #FFFFFF;
  font-size: 32px;
  font-family: Roboto;
  margin-top: 20px;
  margin-bottom: 50px;
}

.list-group {
  border-radius: 25px;
}

.active {
  background-color: #400186;
  border: none;
}

.box1 {
  margin-right: auto;
  background: #FFFFFF;
  /* Shadow_step */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 40px;
  text-align: center;
  height: 340px;
  margin-bottom: 100px;
}

.btn {
  background: #400186;
  border-radius: 40px;
  margin: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  border: 2px solid #400186;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;
}

.btn:hover{
  border-color: #400186;
  color: #400186;
  background: none;
}

.btn1 {
  background: #FDC34A;
  border-radius: 40px;
  margin: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  border: 2px solid #FDC34A;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;
}

.btn1:hover{
  background: none;
  border-color: #FDC34A;
  color: #FDC34A;
}

span {
  color: #7D8790;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
}

a {
  text-decoration: none;
}
</style>