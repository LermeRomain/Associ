<template>
  <div class="container-fluid">

    <div class="container-fluid" v-if="activeStep == 1">
      <h1 class="text-center">J'ai :</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">- de 16
            ans
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/XGijTnUuPfZyrfVEMs"
                  style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">- de 16
                ans
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">+ de 16
                ans
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">+ de 16
            ans
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 2">
      <h1 class="text-center">J'apprends mieux...</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">En équipe
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/55gSqlQsUkQJK7kAIP" style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>

          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">En équipe
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">En
                autodidacte
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">En
            autodidacte
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 3">
      <h1 class="text-center">L'engagement pour moi, c'est...</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">Des
            valeurs qui
            me tiennent à cœur
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/l0MYFebwHWySTU5Lq" style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">Des
                valeurs qui
                me tiennent à cœur
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">Pas ma
                priorité, je préfère Netflix & chill
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">Pas ma
            priorité, je préfère Netflix & chill
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 4">
      <h1 class="text-center">Mes besoins</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">J'ai mon
            idée
            d'association, je veux des membres qui me ressemblent !
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/SrRnsWM8fpnfktOFRD" style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">J'ai mon
                idée
                d'association, je veux des membres qui me ressemblent !
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">J'ai
                besoin de
                conseils !
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">J'ai
            besoin de
            conseils !
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 5">
      <h1 class="text-center">Je créer une association, j'en parle à...</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">Mes amis
            / ma
            famille
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/KCdq1IyxkmgRKj2D23"
                  style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">Mes amis
                / ma
                famille
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">Mon
                école /
                mon travail
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">Mon
            école /
            mon travail
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 6">
      <h1 class="text-center">Le plus contraignant pour créer mon association c'est...</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">Le
            manque de
            confiance en moi
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/2zYk0N9ilSztOAPzb0"
                  style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">Le
                manque de
                confiance en moi
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">Le
                manque
                d'argent
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">Le
            manque
            d'argent
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>


    <div class="container-fluid" v-if="activeStep == 7">
      <h1 class="text-center">Je préfère...</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">Parler
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/0WG69qNdpTEOKG0egb" style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">Parler
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">Ecouter
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">Ecouter
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 8">
      <h1 class="text-center">Discord me sert...</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">À avoir
            cours
            en ligne
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/IgAfIrRH96pFMT3sOm" style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">À avoir
                cours
                en ligne
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">À
                discuter
                avec des gens
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">À
            discuter
            avec des gens
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 9">
      <h1 class="text-center">Le travail en équipe pour moi c'est...</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">Comme un
            jeu
            d'enfant
          </button>
        </div>
        <div class="col-md-5">
          <iframe src="https://giphy.com/embed/pslhvBFfstOJiyBOrs"
                  style=" margin: 0 auto; height: 350px; width: 100%"
                  frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">Comme un
                jeu
                d'enfant
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">À
                petites
                doses
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">À
            petites
            doses
          </button>
        </div>
      </div>
      <p class="text-center">{{ count }}/10</p>
    </div>

    <div class="container-fluid" v-if="activeStep == 10">
      <h1 class="text-center">Dans 3 ans tu inspires à...</h1>
      <div class="row">
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-left: 150px">Mener des
            projets associatifs
          </button>
        </div>
        <div class="col-md-5">
        <iframe src="https://giphy.com/embed/fH985LNdqFZXOFHygK" style=" margin: 0 auto; height: 350px; width: 100%"
                frameBorder="0" class="giphy-embed text-center" allowFullScreen></iframe>
          <div class="row align-items-end d-md-none">
            <div class="col-6">
              <button @click.prevent="nextStep(true)" class="btn1 btn-circle btn-primary btn-sm" type="button">Mener des
                projets associatifs
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-sm" type="button">Ne rien
                changer à ma vie
              </button>
            </div>
          </div>
        </div>
        <!--      <img src="../assets/Dashboard.svg" style="margin-right: auto; margin-left: auto">-->
        <div class="col d-none d-md-block">
          <button @click.prevent="nextStep(false)" class="btn1 btn-circle btn-primary btn-lg" type="button"
                  style="margin-right: 150px">Ne rien
            changer à ma vie
          </button>
        </div>
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
          <a href="https://discord.gg/VpxPH2zNmU" target="_blank" rel="dofollow">
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
          <a href="https://discord.gg/VpxPH2zNmU" target="_blank" rel="dofollow">
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
  height: 100%;
  padding-bottom: 20px;
}

h1 {
  font-family: Roboto;
  font-weight: bold;
  font-size: 58px;
  color: #FFFFFF;
  padding-top: 75px;
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

  background: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 250px;
  /* identical to box height */

  text-align: center;
  border-color: #FFFFFF;
  border: 2px solid #FFFFFF;

  color: #FFFFFF;
}

.btn1:hover {
  border-color: #400186;
  border: 2px solid #400186;
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

a {
  text-decoration: none;
}


.btn-circle.btn-sm {
  width: 170px;
  height: 170px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 1.33;
  border-radius: 100px;
}

.btn-circle.btn-lg {
  width: 200px;
  height: 200px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 100px;
}


</style>

