<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <h1>Tableau de bord :<br>un logiciel de gestion pour<br> tous <span>types d'associations</span></h1>
        <p>Notre logiciel de gestion pour association s'adapte à tous les secteurs associatifs :
          sportive, caritative, culturelle, loisirs, réseaux, omnisports, etc.</p>

        <h3 @mouseover="setWord">
          <span1>-</span1>
          {{ text }}
        </h3>

        <button class="btn" type="button">Prendre en main</button>
      </div>
      <div class="col-12 col-md-6">
        <img src="../assets/Capture.svg" class="rounded d-block" alt="Responsive image">
      </div>
      <div class="row" id="col">
        <h1 style="padding-bottom: 30px; margin-left: 30px">Associ répond aux besoins des associations de tous les
          secteurs.</h1>
      </div>
      <div class="container offset-1">
        <div class="row justify-content-around">
          <div class="box col-md-3">
            <h4>Membres</h4>
            <img src="../assets/Fonction/membre.svg" style="margin-bottom: 50px;">
            <p2>Consultez la liste des adhérents à votre association et assignez leur des rôles</p2>
          </div>
          <div class="box col-md-3">
            <h4>Taches</h4>
            <img src="../assets/Fonction/tache.svg" style="margin-bottom: 70px">
            <p2>Donnez des tâches à effectuer à vos adhérents</p2>
          </div>
          <div class="box col-md-3">
            <h4>Messagerie</h4>
            <img src="../assets/Fonction/message.svg" style="margin-bottom: 100px">
            <p2>Consultez vos messages liés à la gestion et l’organisation de votre association</p2>
          </div>
        </div>
      </div>
      <div class="container offset-1">
        <div class="row justify-content-around">
          <div class="box col-md-3">
            <h4>Discord</h4>
            <img src="../assets/Fonction/discord.svg" style="margin-bottom: 50px">
            <p2>Accedez à une conversation Discord dédiée à votre association</p2>
          </div>
          <div class="box col-md-3">
            <h4>Ressources</h4>
            <img src="../assets/Fonction/ressource.svg" style="margin-bottom: 50px">
          </div>
          <div class="box col-md-3">
            <h4>Documents</h4>
            <img src="../assets/Fonction/document.svg" style="margin-bottom: 50px">
          </div>
        </div>
        <button class="btn1" type="button">Je crée mon association</button>
      </div>
      <h1>Et bien plus encore !<br>
        Profitez de l’offre <span>intense</span></h1><br>


      <!--      Carrousel-->

      <div class="container-fluid d-none d-sm-block d-none d-md-block">
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner" style="padding: 20px">
            <div class="carousel-item active" data-interval="10000">
              <div class="row boxed">
                <div class="box2">
                  <h4>Membres</h4>
                  <img src="../assets/Fonction/membre.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
                <div class="box2">
                  <h4>Messagerie</h4>
                  <img src="../assets/Fonction/message.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
                <div class="box2">
                  <h4>Taches</h4>
                  <img src="../assets/Fonction/tache.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
              </div>
            </div>

            <!--              slide 1 -->

            <div class="carousel-item" data-interval="2000">
              <div class="row boxed">
                <div class="box2">
                  <h4>Messagerie</h4>
                  <img src="../assets/Fonction/message.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
                <div class="box2">
                  <h4>Taches</h4>
                  <img src="../assets/Fonction/tache.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
                <div class="box col-md-3">
                  <h4>Discord</h4>
                  <img src="../assets/Fonction/discord.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
              </div>
            </div>

            <!--            slide 2-->


            <div class="carousel-item" data-interval="3000">
              <div class="row boxed">
                <div class="box2">
                  <h4>Taches</h4>
                  <img src="../assets/Fonction/tache.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
                <div class="box col-md-3">
                  <h4>Discord</h4>
                  <img src="../assets/Fonction/discord.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
                <div class="box2">
                  <h4>Membres</h4>
                  <img src="../assets/Fonction/membre.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
              </div>
            </div>

            <!--          slide 3-->

            <div class="carousel-item" data-interval="3000">
              <div class="row boxed">
                <div class="box2">
                  <h4>Discord</h4>
                  <img src="../assets/Fonction/discord.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
                <div class="box2">
                  <h4>Membres</h4>
                  <img src="../assets/Fonction/membre.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
                <div class="box2">
                  <h4>Messagerie</h4>
                  <img src="../assets/Fonction/message.svg" style="margin-bottom: auto">
                  <button class="btn-1" type="button">Prendre en main</button>
                </div>
              </div>
            </div>

            <!--slide 4-->


            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
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

.container-fluid {
  margin-top: 150px;
  margin-bottom: 150px;
  width: 85%;
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
  margin-top: 28px;
  color: #1A1D32;
  opacity: 0.7;
}

h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  /* identical to box height */


  /* Color_primary */

  color: #400186;

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
  background: #FFFFFF;
  border: 2px solid #400186;
  color: #400186;
  box-sizing: border-box;
  border-radius: 50px;
}

h2 {
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

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #1A1D32;
  opacity: 0.7;
}

.col-12 {
  margin-bottom: 30px;
}


-------------------------------------
.container-fluid {
  width: 90%;
}


.box {
  margin-right: auto;
  background: #FFFFFF;
  /* Shadow_step */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 40px;
  text-align: center;
  width: 280px;
  height: 500px;
}

h4 {
  font-family: Roboto;
  font-size: 20px;
  margin-top: 32px;
  margin-bottom: 40px;
  color: black;
  font-weight: bold;
}

p2 {
  font-family: Roboto;
  font-size: 20px;
  margin-top: 50px;
}

.btn1 {
  display: flex;
  background: #400186;
  border-radius: 40px;
  margin-top: 150px;
  margin-bottom: 150px;
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

.btn1:hover {
  text-decoration-line: none;
  background: #FFFFFF;
  border: 2px solid #400186;
  color: #400186;
  box-sizing: border-box;
  border-radius: 50px;
}

/*controle carrousel*/


.carousel-control-prev-icon{
  margin-right: auto;
}

.carousel-control-next-icon{
  margin-left: 70%;
}


.carousel-control-next-icon:after {
  content: '>';
  font-size: 55px;
  color: #400186;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: #400186;
}

.box2 {
  margin-right: auto;
  margin-left: 32px;
  background: #FFFFFF;
  /* Shadow_step */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 40px;
  text-align: center;
  width: 280px;
  height: 500px;
}

.btn-1 {
  float: bottom;
  background: #FD4C6F;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  /* identical to box height */

  text-align: center;
  border: 2px solid #FD4C6F;

  color: #FFFFFF;

}

.btn-1:hover {
  text-decoration-line: none;
  background: #FFFFFF;
  border: 2px solid #FD4C6F;
  color: #FD4C6F;
  box-sizing: border-box;
  border-radius: 50px;
}


</style>
