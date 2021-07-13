<template>
  <div>
    <div class="container-fluid background">
      <div class="row">
        <div class="col-md-6 offset-md-1" style="margin-top: 10%">
          <h1>
            Webinaires
          </h1>
          <p>
            Le webinaire désigne une conférence en ligne à laquelle plusieurs personnes connectées dans des lieux
            éloignés
            peuvent participer.
            <br><br>
            La finalité étant d’aider les adolescents à se former, collaborer et trouver des moyens pour financer leur
            association.
          </p>
          <button class="btn1">S’inscrire au webinaire</button>
        </div>
        <div class="col-md-5">
          <img src="../assets/solar.svg" alt="illustrations solar associ" class="d-none d-md-block"
               style="width: 100%; margin-top: 100px">
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 offset-md-1" style="margin-top: 50px">
          <div class="list-group" id="list-tab" role="tablist">
            <a @click.prevent="nextStep1(true)" class="list-group-item list-group-item-action active"
               id="list-home-list" data-toggle="list"
               href="#list-home" role="tab" aria-controls="home">Le déroulé du webinaire</a>
            <a @click.prevent="nextStep2(true)" class="list-group-item list-group-item-action" id="list-profile-list"
               data-toggle="list"
               href="#list-profile" role="tab" aria-controls="profile">Les avantages</a>
            <a @click.prevent="nextStep3(true)" class="list-group-item list-group-item-action" id="list-messages-list"
               data-toggle="list"
               href="#list-messages" role="tab" aria-controls="messages">Les intervenants</a>
          </div>
        </div>
        <p1 v-if="activeStep ==1" class="col-md-6">Après votre inscription, vous recevez un e-mail de confirmation avec
          un lien personnalisé qui vous permettra
          à l’heure prévue de vous connecter au site sur lequel est retransmis la réunion. En cas de retard, vous pouvez
          tout de même accéder au webinaire en cours.
          Vous pouvez participer à un webinaire depuis un ordinateur, une tablette, un smartphone ou un mini pc,
          connecté à internet. Il vous suffit de suivre la procédure suivante :<br><br>

          Cliquez sur le lien que vous avez reçu par mail,
          Rentrez, si besoin, les informations demandées puis sur "connexion",
          La plateforme du webinaire (Zoom, Microsoft Teams, Livestorm, Adobe Connect, Google Meet...) s'ouvre,
          Paramétrez votre caméra et votre micro si besoin,
          Rejoignez la réunion.
          <br>
          <br>
          <a @click.prevent="nextStep4(true)" style="font-family: Roboto; color: #FDC34A; cursor: pointer">Voir plus</a>
        </p1>

        <p1 v-if="activeStep ==4" class="col-md-6">Après votre inscription, vous recevez un e-mail de confirmation avec
          un lien personnalisé qui vous permettra à l’heure prévue de vous connecter au site sur lequel est retransmis
          la réunion. En cas de retard, vous pouvez tout de même accéder au webinaire en cours.
          Vous pouvez participer à un webinaire depuis un ordinateur, une tablette, un smartphone ou un mini pc,
          connecté à internet. Il vous suffit de suivre la procédure suivante :
          <br><br>
          Cliquez sur le lien que vous avez reçu par mail,
          Rentrez, si besoin, les informations demandées puis sur "connexion",
          La plateforme du webinaire (Zoom, Microsoft Teams, Livestorm, Adobe Connect, Google Meet...) s'ouvre,
          Paramétrez votre caméra et votre micro si besoin,
          Rejoignez la réunion.
          Depuis la plateforme, vous pouvez :
          <br><br>
          Visualiser en direct la présentation PowerPoint utilisée par le conférencier grâce à la retransmission vidéo
          de la conférence,
          Voir et entendre le conférencier en temps réel et lui poser des questions par « chat » (boîte de dialogue
          écrit),
          Intervenir oralement, même si nous vous conseillons d'utiliser la fenêtre de chat.

          <br><br>
          Pour écouter la réunion, vous avez 2 choix :
          <br><br>
          Via les haut-parleurs de votre pc, smartphone ou tablette,
          Via les écouteurs que vous brancherez sur votre pc, smartphone ou tablette.
          <br><br>
          Pour poser vos questions : Il vous suffit de taper un message dans la boîte de dialogue du « chat ». Les
          questions seront vues en temps réel par l’animateur et seront traitées au cours de la conférence.
        </p1>


        <p1 v-if="activeStep ==2" class="col-md-6">Interactif, rapide et aisé à mettre en oeuvre, les webinaires
          éliminent les contraintes liées au déplacement ; elles favorisent la mise en réseau et la collaboration entre
          différents acteurs.<br><br>

          Se former : un webinaire peut servir à communiquer des ressources ou conférences sur un objet. L’organisateur
          crée le rendez-vous, informe le public cible et transfère le contenu en répondant aux questions des
          participants.<br>
          Collaborer : lors d’un projet réunissant un groupe d’acteurs, plusieurs personnes encadrées par un animateur
          se connectent pour échanger et définir les pistes et stratégies de travail. Les interactions facilitent ainsi
          la prise de décision et l’avancée du projet.
          <br>
          <br>
          <a @click.prevent="nextStep5(true)" style="font-family: Roboto; color: #FDC34A; cursor: pointer">Voir plus</a>
        </p1>

        <p1 v-if="activeStep ==5" class="col-md-6">Interactif, rapide et aisé à mettre en oeuvre, les webinaires
          éliminent les contraintes liées au déplacement ; elles favorisent la mise en réseau et la collaboration entre
          différents acteurs.
          <br><br>
          <span>Se former :</span> un webinaire peut servir à communiquer des ressources ou conférences sur un objet. L’organisateur
          crée le rendez-vous, informe le public cible et transfère le contenu en répondant aux questions des
          participants.<br>
          <span>Collaborer : </span>lors d’un projet réunissant un groupe d’acteurs, plusieurs personnes encadrées par un animateur
          se connectent pour échanger et définir les pistes et stratégies de travail. Les interactions facilitent ainsi
          la prise de décision et l’avancée du projet.<br>
          <span>Produire : </span>en binôme dans la perspective de co-produire un document, cet espace élimine les distances permet
          un accès direct vers des navigateurs et des ressources externes.<br>
          <span>Mettre en réseau des acteurs :</span> Afin d’informer, d’acculturer des personnes travaillant séparément sur les même
          objectifs, le webinaire permet des mises en commun, de la mutualisation et de l’entraide entre pairs. Les
          rencontres virtuelles sont conservées stockées en ligne pour être consultables par chacun de manière différée.
        </p1>

        <p1 v-if="activeStep ==3" class="col-md-6">Les intervenants sont des indépendants, spécialiste en gestion et en
          solutions de financement. Notamment chez les adolescents afin qu’il puisse prendre plaisir à gérer leur
          trésorierie. Les financements publics, privés et participatifs n’auront plus aucun secret pour vous.
          <br>
          <br>
          <a @click.prevent="nextStep6(true)" style="font-family: Roboto; color: #FDC34A; cursor: pointer">Voir plus</a>
        </p1>

        <p1 v-if="activeStep ==6" class="col-md-6">Accélérateur culturel, notre objectif est de vous proposer les
          services des spécialistes et experts les plus légitimes dans leurs domaines de compétences, reconnus pour le
          contenu et la valeur ajoutée de leurs prestations.
          <br>
          <br>
          Nos intervenants prennent plaisir à diffuser le savoir et génèrer le changement.
          <br>
          <br>
          Pour vous, nous cultivons un suivi constant en France pour déceler de nouveaux talents et conférenciers.
          la qualité et l’originalité de l’approche, mais aussi l’objectif visé et la réponse à un besoin réel des
          jeunes associations<br>
          l’expérience dans l’animation de collectifs, la pratique de l’expérimentation, du jeu, et de l’interactivité
          constructive dans les modes pédagogiques
          <br>
          <br>
          La capacité à porter un regard critique sur sa pratique professionnelle, la curiosité et la formation continue
          à de nouvelles compétences
          <br>
          <br>
          La bonne compréhension des enjeux et des fonctionnements actuels des associations
          <br>
          <br>
          Le savoir-être (écoute, bienveillance, adaptabilité, bonne humeur), la capacité à partager son enthousiasme,
          susciter des émotions positives et inspirer les autres
          <br>
          <br>
          L’adhésion à nos valeurs et à nos missions en tant qu’organisation, l’envie de s’engager sur le moyen-long
          terme au sein du réseau associ.
        </p1>

      </div>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-around  offset-md-2">
        <div class="box1 col-md-4">
          <h4>Tentez l’expérience</h4>
          <img src="../assets/Webinaire/group1.svg" alt="illustrations experience"><br>
          <p2>En savoir plus sur moi</p2>
          <br>
          <router-link to="/quizz">
            <button class="btn">Démarrer</button>
          </router-link>
        </div>
        <div class="box1 col-md-4">
          <h4>Je m’inscris au prochain webinaire</h4>
          <img src="../assets/Webinaire/group2.svg" alt="illustration webinaire"><br>
          <p2>Session début août</p2>
          <br>
          <button class="btn">S’inscrire au webinaire</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Webinaires",

  data() {
    return {
      count: 1,
      activeStep: 1,
    };
  },

  methods: {
    nextStep1() {
      this.activeStep = 1;
    },
    nextStep2() {
      this.activeStep = 2;
    },
    nextStep3() {
      this.activeStep = 3;
    },
    nextStep4() {
      this.activeStep = 4;
    },
    nextStep5() {
      this.activeStep = 5;
    },
    nextStep6() {
      this.activeStep = 6;
    },
  }
}
</script>

<style scoped>

.container-fluid {
  background-color: #F9F9F9;
}

.background {
  background-image: url("../assets/Backrose.svg");
  height: 763px;
}

h1 {
  color: #FFFFFF;
  font-size: 58px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 50px;
}

P {
  color: #FFFFFF;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 20px;
  margin-bottom: 50px;
}

p1 {
  color: black;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 50px;
  margin-bottom: 50px;
}

span{
  color: black;
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
}

P2 {
  color: black;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 20px;
  margin-bottom: 50px;
  margin-right: auto;
  margin-left: auto;
}

h2 {
  color: black;
  font-size: 58px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
}

h3 {
  color: black;
  font-size: 32px;
  font-family: Roboto;
}

.list-group {
  border-radius: 25px;
}

.active {
  background-color: #400186;
  border: none;
}

.box {
  background: #FFFFFF;
  /* Shadow_step */

  box-shadow: 4px 10px 24px 2px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  width: auto;
  height: 402px;
}

h4 {
  font-family: Roboto;
  font-size: 32px;
  margin-top: 32px;
  margin-bottom: 40px;
  color: black;
  text-align: center;
}

.box1 {
  margin-right: auto;
  background: #FFFFFF;
  /* Shadow_step */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 40px;
  text-align: center;
  width: 432px;
  height: 402px;
  margin-bottom: 100px;
}

.btn {
  background: #FD4C6F;
  border-radius: 40px;
  margin-top: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: center;
  border: 2px solid #FD4C6F;
  color: #FFFFFF;
}

.btn:hover {
  border-color: #FFFFFF;
  color: #FD4C6F;
  background: none;
  border-color: #FD4C6F;
}

.btn1 {
  background: #FFFFFF;
  border-radius: 40px;
  margin-top: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: center;
  border: 2px solid #FFFFFF;

  color: #400186;
}

.btn1:hover {
  background: none;
  color: #FFFFFF;
  border-color: #FFFFFF;
}

a {
  text-decoration: none;
  font-family: Roboto;
}

</style>