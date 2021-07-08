<template>
  <div>
    <div class="container-fluid background">
      <div class="row">
        <div class="col-md-6 offset-md-1" style="margin-top: 10%">
          <h1>
            Webinaire
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
          <img src="../assets/solar.svg" class="d-none d-md-block" style="width: 100%; margin-top: 100px">
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 offset-md-1" style="margin-top: 50px">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
               href="#list-home" role="tab" aria-controls="home">Le déroulé du webinaire</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
               href="#list-profile" role="tab" aria-controls="profile">Les avantages</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
               href="#list-messages" role="tab" aria-controls="messages">Les intervenants</a>
          </div>
        </div>
        <p1 class="col-md-6">Après votre inscription, vous recevez un e-mail de confirmation avec un lien personnalisé qui vous permettra
          à l’heure prévue de vous connecter au site sur lequel est retransmis la réunion. En cas de retard, vous pouvez
          tout de même accéder au webinaire en cours.
          Vous pouvez participer à un webinaire depuis un ordinateur, une tablette, un smartphone ou un mini pc,
          connecté à internet. Il vous suffit de suivre la procédure suivante :<br><br>

          Cliquez sur le lien que vous avez reçu par mail,
          Rentrez, si besoin, les informations demandées puis sur "connexion",
          La plateforme du webinaire (Zoom, Microsoft Teams, Livestorm, Adobe Connect, Google Meet...) s'ouvre,
          Paramétrez votre caméra et votre micro si besoin,
          Rejoignez la réunion.
        </p1>
      </div>
    </div>

    <div class="container offset-md-2">
      <div class="row justify-content-around">
        <div class="box1 col-md-4">
          <h4>Tentez l’expérience</h4>
          <img src="../assets/Webinaire/group1.svg"><br>
          <p2>En savoir plus sur moi</p2>
          <br>
          <router-link to="/Quizz"><button class="btn">Démarrer</button></router-link>
        </div>
        <div class="box1 col-md-4">
          <h4>Je m’inscris au prochain webinaire</h4>
          <img src="../assets/Webinaire/group2.svg"><br>
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
  name: "Webinaires"
}
</script>

<style scoped>

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

P1 {
  color: black;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 20px;
  margin-bottom: 50px;
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
  border: none;

  color: #FFFFFF;
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
  border: none;

  color: #400186;
}

</style>