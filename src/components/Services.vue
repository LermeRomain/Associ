<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <video src="../assets/videoCible.mp4" width=100%  height=85% controls title="vidéo explainer du concept Associ"></video>
      </div>
      <div class="col-12 col-md-6">
        <h1>Notre expertise</h1>
        <p>Associ ambitionne de devenir le partenaire, local, digital de confiance des associatons d’adolescents pour accélérer leur croissance. Gérer votre profil comme vous le souhaitez.<br><br>
          Notre site web vous permettra de faciliter la création d’une association d’un point de vue administratif.
          Nous vous  offrons un service de suivi de gestion de votre association (trésorerie, réseaux sociaux, conseil et coaching, gérer les membres, trouver un lieu, gérer les donations).<br><br>
          Économisez votre temps (et votre énergie). Concentrez-vous sur l’essentiel, nous nous occupons du reste.</p>
        <button class="btn" type="button" >Nous découvrir</button>
      </div>
    </div>
  </div>
</template>


<script>

export default {
    name:'Services'
}

</script>


<style scoped>

h1{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 101.8%;
  /* identical to box height, or 59px */
  letter-spacing: -0.01em;
  /* Text */
  color: #1A1D32;
}

p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #1A1D32;
  opacity: 0.7;
}

.col-12{
  margin-bottom: 30px;
}

.btn {
  display: flex;
  background: #400186;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 24px 32px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: center;
  border: 2px solid #400186;

  color: #FFFFFF;
}

.btn:hover{
  text-decoration-line: none;
  background: #FFFFFF;
  color: #400186;
  box-sizing: border-box;
  border-radius: 50px;
}

</style>
