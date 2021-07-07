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
        </div>
        <div class="col-md-5">
          <img src="../assets/solar.svg" class="d-none d-md-block" style="width: 100%; margin-top: 100px">
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 offset-md-1">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Le déroulé du webinaire</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Les avantages</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Les intervenants</a>
          </div>
        </div>
      </div>
    </div>

      <div class="container-fluid row" style="margin-bottom: 150px">
        <div class="container offset-1">
          <div class="row justify-content-around">
            <div class="box col-md-4">
              <h4>Tentez l'expérience</h4>
              <p2>En savoir plus sur moi</p2>
            </div>
            <div class="box col-md-4">
              <h4>Je m’inscris au prochain webinaire</h4>
              <p2>Session début août</p2>
            </div>
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

.list-group{
  border-radius: 25px;
}

.active{
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

</style>