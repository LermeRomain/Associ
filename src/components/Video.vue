<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <img src="../assets/Capture.svg" class="rounded d-block" alt="Responsive image">
      </div>
      <div class="col-12 col-md-6">
        <h1>Tableau de bord :<br>un logiciel de gestion pour tous <span>types d'associations</span></h1>

        <h3 @mouseover="setWord"> <span1>-</span1> {{ text }}</h3>

        <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
          Découvrir
        </button>
      </div>
      <div class="row" id="col">
        <div class="col-12 col-md-4">
          <img src="../assets/click.svg">
          <h2>Simple</h2>
          <p>Un e-mail, un mot de passe et c’est parti. Démarrez simplement la création de votre association</p>
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/coeur.svg">
          <h2>Agréable</h2>
          <p>Une interface de synthèse simple pour vous faciliter dans vos tâches quotidienne.</p>
        </div>
        <div class="col-12 col-md-4">
          <img src="../assets/etiquette.svg">
          <h2>Gratuit</h2>
          <p>Une solution pensée pour tous. Il est important que chacun d’entre vous puisse s’exprimer.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',

  data() {
    return {
      text: "",
      sport: ["Sport ...", "Cinéma ...", "Musique ...", "Jeux vidéo ...", "Voiture ...", "Livre ..."]
    };
  },
  methods: {
    setWord() {
      const max = this.sport.length;
      const min = 0;
      const range = max - min + 1;
      let num = Math.floor(Math.random() * range) + min;
      this.text = this.sport[num];

    }
  }
}



</script>

<style scoped>

.container{
  margin-top: 150px;
  margin-bottom: 150px;
}

h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 101.8%;
  /* identical to box height, or 59px */
  letter-spacing: -0.01em;
  /* Text */
  color: #1A1D32;
}

span {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 101.8%;
  /* identical to box height, or 59px */
  letter-spacing: -0.01em;
  /* Text */
  color: #FD4C6F;
}

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #1A1D32;
  opacity: 0.7;
}

h3{
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  /* identical to box height */


  /* Color_primary */

  color: #404DEF;

}

img {
  max-width: 100%;
  height: auto;
  float: left;
  padding-right: 10px;
}

.btn {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #FFFFFF;

  background: #404DEF;
  width: 205px;
  height: 71px;
  border-radius: 40px;

}

.btn:hover{
  text-decoration-line: none;
  background: #FFFFFF;
  border: 2px solid #404DEF;
  color: #404DEF;
  box-sizing: border-box;
  border-radius: 50px;
}

h2{
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

#col{
  padding: 55px;
}
.col-12{
  margin-bottom: 30px;
}
</style>
