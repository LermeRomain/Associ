<template>
  <div class="container-fluid">

    <div class="container-fluid" v-if="activeStep == 1">
      <h1 class="text-center">J'ai :</h1>
      <div class="row">
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-left: 150px">- de 16
          ans
        </button>
        <iframe src="https://giphy.com/embed/XGijTnUuPfZyrfVEMs" style="margin-right: auto; margin-left: auto"
                width="284"
                height="480" frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-right: 150px">+ de 16
          ans
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 2">
      <h1 class="text-center">J'apprends mieux...</h1>
      <div class="row">
        <button @click.prevent="nextStep(true)" class="btn1 col-md-2" type="button" style="margin-left: 150px">En équipe
        </button>
        <iframe src="https://giphy.com/embed/55gSqlQsUkQJK7kAIP" style="margin-right: auto; margin-left: auto"
                width="480" height="270" frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-right: 150px">En
          autodidacte
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 3">
      <h1 class="text-center">L'engagement pour moi, c'est...</h1>
      <div class="row">
        <button @click.prevent="nextStep(true)" class="btn1 col-md-2" type="button" style="margin-left: 150px">Des
          valeurs qui
          me tiennent à cœur
        </button>
        <iframe src="https://giphy.com/embed/l0MYFebwHWySTU5Lq" style="margin-right: auto; margin-left: auto"
                width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-right: 150px">Pas ma
          priorité, je préfère Netflix & chill
          <conseils></conseils>
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 4">
      <h1 class="text-center">Mes besoins</h1>
      <div class="row">
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-left: 150px">J'ai mon
          idée
          d'association, je veux des membres qui me ressemblent !
        </button>
        <iframe src="https://giphy.com/embed/SrRnsWM8fpnfktOFRD" style="margin-right: auto; margin-left: auto"
                width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-right: 150px">J'ai
          besoin de
          conseils !
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 5">
      <h1 class="text-center">Je créer une association, j'en parle à...</h1>
      <div class="row">
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-left: 150px">Mes amis
          / ma
          famille
        </button>
        <iframe src="https://giphy.com/embed/KCdq1IyxkmgRKj2D23" style="margin-right: auto; margin-left: auto"
                width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-right: 150px">Mon
          école /
          mon travail
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 6">
      <h1 class="text-center">Le plus contraignant pour créer mon association c'est...</h1>
      <div class="row">
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-left: 150px">Le
          manque de
          confiance en moi
        </button>
        <iframe src="https://giphy.com/embed/2zYk0N9ilSztOAPzb0" style="margin-right: auto; margin-left: auto"
                width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(true)" class="btn1 col-md-2" type="button" style="margin-right: 150px">Le
          manque
          d'argent
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>


    <div class="container-fluid" v-if="activeStep == 7">
      <h1 class="text-center">Je préfère...</h1>
      <div class="row">
        <button @click.prevent="nextStep(true)" class="btn1 col-md-2" type="button" style="margin-left: 150px">Parler
        </button>
        <iframe src="https://giphy.com/embed/0WG69qNdpTEOKG0egb" style="margin-right: auto; margin-left: auto"
                width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-right: 150px">Ecouter
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 8">
      <h1 class="text-center">Discord me sert...</h1>
      <div class="row">
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-left: 150px">À avoir
          cours
          en ligne
        </button>
        <iframe src="https://giphy.com/embed/IgAfIrRH96pFMT3sOm" style="margin-right: auto; margin-left: auto"
                width="480" height="336" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(true)" class="btn1 col-md-2" type="button" style="margin-right: 150px">À
          discuter
          avec des gens
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 9">
      <h1 class="text-center">Le travail en équipe pour moi c'est...</h1>
      <div class="row">
        <button @click.prevent="nextStep(true)" class="btn1 col-md-2" type="button" style="margin-left: 150px">Comme un
          jeu
          d'enfant
        </button>
        <iframe src="https://giphy.com/embed/pslhvBFfstOJiyBOrs" style="margin-right: auto; margin-left: auto"
                width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-right: 150px">À
          petites
          doses
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 10">
      <h1 class="text-center">Dans 3 ans tu inspires à...</h1>
      <div class="row">
        <button @click.prevent="nextStep(true)" class="btn1 col-md-2" type="button" style="margin-left: 150px">Mener des
          projets associatifs
        </button>
        <iframe src="https://giphy.com/embed/fH985LNdqFZXOFHygK" style="margin-right: auto; margin-left: auto"
                width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <button @click.prevent="nextStep(false)" class="btn1 col-md-2" type="button" style="margin-right: 150px">Ne rien
          changer à ma vie
        </button>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 11">
      <div v-if="score >= 4">
        <h1 class="text-center">Vous avez de bonnes raison <br>pour rejoindre la communauté <br>Associ
        </h1>
        <div class="text-center">
          <p>Le monde associatif est quelque chose qui vous intéresse. Vous êtes quelqu'un <br>de curieux, dynamique et
            vous aimez échanger. Rejoindre notre communauté, c'est <br>favoriser votre épanouissement.
            <br><br>
            Tu commences déjà à t'intégrer chez nous !

          </p>
          <a href="https://discord.gg/FN6DV8rF" target="_blank">
            <button class="btn" type="button">Rejoindre le Discord</button>
          </a>
        </div>
      </div>

      <div v-else>
        <h1 class="text-center">Vous êtes un peu frilleux <br>pour rejoindre le monde <br>associatif</h1>
        <div class="text-center">
          <p>Ne vous en faites pas, nous vous accompagnons tout au long de <br>la création de votre association. Que ce
            soit dans les démarches <br>administratives et dans sa gestion.
            <br><br>
            N'hesite pas à nous contacter.

          </p>
          <a href="https://discord.gg/FN6DV8rF" target="_blank">
            <button class="btn" type="button">Rejoindre le Discord</button>
          </a>
        </div>
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
      activeStep: 1,
      score: 0,
    };
  },
  /*
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
        } else if (value === 8) {
          this.isStep7Visible = false;
          this.isStep8Visible = true;
        } else if (value === 9) {
          this.isStep8Visible = false;
          this.isStep9Visible = true;
        } else if (value === 10) {
          this.isStep9Visible = false;
          this.isStep10Visible = true;
        } else {
          this.isStep10Visible = false;
          this.isStep11Visible = true;
        }
      },
    },
  */
  methods: {
    nextStep(isAnswerRight) {
      this.score = isAnswerRight ? this.score + 1 : this.score
      if (this.count < 11) {
        this.count++;
        this.activeStep = this.count;
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
  padding-top: 50px;
  margin-bottom: 50px;
}

.btn {
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
  margin-bottom: 250px;
  /* identical to box height */

  text-align: center;
  border-color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 10px;

  color: #FFFFFF;
}

.btn1:hover {
  border-color: #400186;
  border: 5px solid #400186;
  border-radius: 10px;
  transition: 200ms;
}

p {
  color: #FFFFFF;
  font-family: Roboto;
  margin-top: 20px;
  font-size: 20px;
}

span {
  color: #FD4C6F;
  font-family: Roboto;
}

span1 {
  color: #FDC34A;
  font-family: Roboto;
}

</style>

