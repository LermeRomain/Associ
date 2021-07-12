<template>
  <div class="container-fluid">
    <div class="row offset-1">
      <div class="col-12 col-md-5" style="margin-top: 18%">
        <h2>Bientôt disponible</h2>
        <h1>Tableau de bord</h1>
        <p>Consultez la liste des adhérents à votre <br>association et assignez leur des tâches, des <br>rôles et bien
          plus encore !</p>

        <!--        <h3 @mouseover="setWord">-->
        <!--          <span1>-</span1>-->
        <!--          {{ text }}-->
        <!--        </h3>-->

        <a href="https://drive.google.com/file/d/1Nek3VsJNKDJ0E5xSBA9TKV8rtuXEtMbE/view?usp=sharing" target="_blank"
           rel="nofollow">
          <button class="btn" type="button">Télécharger le guide de création</button>
        </a>
      </div>
      <div class="col-12 col-md-6" style="margin-top: 12%; border-radius: 40px">
        <img src="../assets/Dashboard.svg" class="rounded d-block" alt="Responsive image" style="border-radius: 32px;">
        <p>Notre outil de gestion pour <span>tout types d’associations</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableauBord",

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

.container-fluid {
  background-image: url("../assets/Background2.svg");
  height: 1035px;
  width: 100%;
  margin-top: 80px;
  background-color: #F9F9F9;
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
  color: #FFFFFF;
}


p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  margin-top: 28px;
  color: #FFFFFF;
}


img {
  max-width: 100%;
  height: auto;
}

.btn {
  display: flex;
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
  border: 2px solid #400186;

  color: #FFFFFF;

}

.btn:hover {
  text-decoration-line: none;
  background: none;
  border: 2px solid #400186;
  color: #400186;
  box-sizing: border-box;
  border-radius: 50px;
}

h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 101.8%;
  /* identical to box height, or 59px */
  letter-spacing: -0.01em;
  /* Text */
  color: #FD4C6F;
  margin-bottom: 32px;

}

span {
  color: #400186;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
}

a {
  text-decoration: none;
}


</style>