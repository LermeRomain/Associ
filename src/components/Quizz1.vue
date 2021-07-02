<template>
  <div class="container-fluid">
    <div class="container-fluid" v-if="isStep1Visible">
      <h1 class="text-center">J'ai :</h1>
      <div class="row">
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-left: 150px">- de 16 ans</button>
        <iframe src="https://giphy.com/embed/XGijTnUuPfZyrfVEMs" style="margin-right: auto; margin-left: auto"
                width="284"
                height="480" frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-right: 150px">+ de 16 ans</button>
      </div>
      <p class="text-center">{{ count }}/8</p>
    </div>

    <div class="container-fluid" v-if="isStep2Visible">
      <h1 class="text-center">L'engagement pour moi, c'est...</h1>
      <div class="row">
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-left: 150px">Des valeurs qui me tienne à coeur</button>
        <iframe src="https://giphy.com/embed/l0MYFebwHWySTU5Lq" style="margin-right: auto; margin-left: auto" width="480" height="330" frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-right: 150px">Je préfère netflix and chill</button>
      </div>
      <p class="text-center">{{ count }}/8</p>
    </div>

    <div class="container-fluid" v-if="isStep3Visible">
      <h1 class="text-center">Mes besoins...</h1>
      <div class="row">
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-left: 150px">Je veux des membres qui me ressemble</button>
        <iframe src="https://giphy.com/embed/SrRnsWM8fpnfktOFRD" style="margin-right: auto; margin-left: auto" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-right: 150px">J'ai besoin de conseils<conseils></conseils></button>
      </div>
      <p class="text-center">{{ count }}/8</p>
    </div>

    <div class="container-fluid" v-if="isStep4Visible">
      <h1 class="text-center">J'apprends mieux...</h1>
      <div class="row">
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-left: 150px">En équipe</button>
        <iframe src="https://giphy.com/embed/55gSqlQsUkQJK7kAIP" style="margin-right: auto; margin-left: auto" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-right: 150px">En autodidacte</button>
      </div>
      <p class="text-center">{{ count }}/8</p>
    </div>

    <div class="container-fluid" v-if="isStep5Visible">
      <h1 class="text-center">Je créer une association, j'en parle à...</h1>
      <div class="row">
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-left: 150px">Mes amis / ma famille</button>
        <iframe src="https://giphy.com/embed/yoJC2ACrf2UEzlbWmI" style="margin-right: auto; margin-left: auto" width="480" height="247" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-right: 150px">Mon école / mon travail</button>
      </div>
      <p class="text-center">{{ count }}/8</p>
    </div>

    <div class="container-fluid" v-if="isStep6Visible">
      <h1 class="text-center">Le plus chiant pour une association c'est :</h1>
      <div class="row">
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-left: 150px">Le manque de confiance en moi</button>
        <iframe src="https://giphy.com/embed/LQiHlxXaCSRhLXvqWx" style="margin-right: auto; margin-left: auto" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-right: 150px">Le manque d'argent</button>
      </div>
      <p class="text-center">{{ count }}/8</p>
    </div>


    <div class="container-fluid" v-if="isStep7Visible">
      <h1 class="text-center">Je préfère...</h1>
      <div class="row">
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-left: 150px">Parler </button>
        <iframe src="https://giphy.com/embed/0WG69qNdpTEOKG0egb" style="margin-right: auto; margin-left: auto" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-right: 150px">Ecouter</button>
      </div>
      <p class="text-center">{{ count }}/8</p>
    </div>

    <div class="container-fluid" v-if="isStep8Visible">
      <h1 class="text-center">Discord sert...</h1>
      <div class="row">
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-left: 150px">A faire cours en ligne</button>
        <iframe src="https://giphy.com/embed/IgAfIrRH96pFMT3sOm" style="margin-right: auto; margin-left: auto" width="480" height="336" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep" class="btn1 col-md-2" type="button" style="margin-right: 150px">A discuter avec des gens</button>
      </div>
      <p class="text-center">{{ count }}/8</p>
    </div>

    <div class="container-fluid" v-if="isStep9Visible">
      <h1 class="text-center">Vous avez l’air de <span>tout<br> avoir</span> pour créer une <br><span1>association</span1></h1>
      <div class="text-center">
        <p>Rejoingnez notre communauté <span1>discord</span1>.<br>
          Vous pouvez y retrouver des jeunes pleins d’ambitions qui souhaitent créer <br>ou rejoindre une association.
          <br><br>
          Ainsi que des news sur notre solution et des jeux créés pour vous.</p>
        <a href="https://discord.gg/FN6DV8rF" target="_blank"><button class="btn" type="button">Rejoindre le Discord</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quizz1",

  data() {
    return {
      count: 1,
      isStep1Visible: true,
      isStep2Visible: false,
      isStep3Visible: false,
      isStep4Visible: false,
      isStep5Visible: false,
      isStep6Visible: false,
      isStep7Visible: false,
      isStep8Visible: false,
      isStep9Visible: false,
    };
  },

  watch: {
    count(value) {
      if (value === 2) {
        this.isStep1Visible = false;
        this.isStep2Visible = true;
      } else if (value === 3) {
        this.isStep2Visible = false;
        this.isStep3Visible = true;
      } else if (value === 4) {
        this.isStep3Visible = false;
        this.isStep4Visible = true;
      } else if (value === 5) {
        this.isStep4Visible = false;
        this.isStep5Visible = true;
      } else if (value === 6) {
        this.isStep5Visible = false;
        this.isStep6Visible = true;
      } else if (value === 7) {
        this.isStep6Visible = false;
        this.isStep7Visible = true;
      } else if (value === 8){
        this.isStep7Visible = false;
        this.isStep8Visible = true;
      } else {
        this.isStep8Visible = false;
        this.isStep9Visible = true;
      }
    },
  },
  methods: {
    nextStep() {
      if (this.count < 9) {
        this.count++;
        this.isLastInputFull = false;
      }
    },
  }
}
</script>

<style scoped>

.container-fluid {
  background: -webkit-linear-gradient(right, #FD4C6F 20%, #400186);
  height: 950px;
}

h1 {
  font-family: Roboto;
  font-weight: bold;
  font-size: 58px;
  color: #FFFFFF;
  padding-top: 200px;
  margin-bottom: 76px;
}

.btn{
  margin-top: 5%;
  margin-bottom: 10px;
  background: #FD4C6F;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: center;
  border-color: #FD4C6F;
  border: 2px solid #FD4C6F;

  color: #FFFFFF;
}

.btn:hover {
  text-decoration-line: none;
  background: none;
  color: #FD4C6F;
  box-sizing: border-box;
  border-radius: 50px;
}

.btn1 {
  display: flex;
  margin-top: 7%;
  background: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  /* identical to box height */

  text-align: center;
  border: none;

  color: #FFFFFF;
}

p {
  color: #FFFFFF;
  font-family: Roboto;
  margin-top: 20px;
  font-size: 20px;
}

span{
  color: #FD4C6F;
  font-family: Roboto;
}

span1{
  color: #FDC34A;
  font-family: Roboto;
}

</style>

