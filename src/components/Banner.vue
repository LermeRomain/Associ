<template>
  <div class="background container-fluid">
    <div class="row">
      <div class="col-12 col-md-5 offset-md-1">
        <h1>Créer votre association</h1>
        <p id="txt1" class="col-md-11">Associ vous aidera dans la création de votre association.
          Jusqu’à 20 ans, vous aurez la possibilité avec un associé de créer votre association.<br><br>
          De l’administratif à sa gestion, nous vous accompagnerons tout au long de votre vie associative.</p>
        <div class="row" style="margin-left: 1px">
          <a href="https://discord.gg/VpxPH2zNmU" target="_blank" rel="dofollow">
            <button class="btn" type="button">Rejoindre la communauté</button>
          </a>
          <router-link to="/qui-sommes-nous">
            <button class="btn1" type="button" style="margin-top: 20px; background: #F9F9F9">Nous Découvrir</button>
          </router-link>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <iframe width=100% height=400px src="https://www.youtube.com/embed/C1DC0x2zN-I"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <!--        <video src="../assets/videoCible.mp4" width=100% height=100% controls-->
        <!--               title="vidéo explainer du concept Associ"></video>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'

}
</script>

<style scoped>

p {

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #404DEF;
}

#txt1 {
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #1A1D32;
  opacity: 0.7;
  text-align: justify-all;
}

h1 {
  height: 58px;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 58px;
  color: #1A1D32;
  margin-bottom: 90px;
  line-height: 100.8%;
}

span {
  padding-bottom: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 58px;
  color: #1A1D32;
}


.background {
  padding-top: 100px;
  background-color: #F9F9F9;
  padding-bottom: 100px;
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

a {
  text-decoration: none;
}
</style>
