<template>
  <div class="container-fluid">
    <div class="row offset-md-1">
      <div class="row" id="col">
        <h1 style="padding-bottom: 30px; margin-left: 30px">Associ répond aux besoins des associations<br>
          de tous les secteurs avec l’offre <span>Gratuite*</span></h1>
      </div>
      <div class="container">
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
      <div class="container">
        <div class="row justify-content-around">
          <div class="box col-md-3">
            <h4>Discord</h4>
            <img src="../assets/Fonction/discord.svg" style="margin-bottom: 50px">
            <p2>Accedez à une conversation Discord dédiée à votre association</p2>
          </div>
          <div class="box col-md-3">
            <h4>Assistance</h4>
            <img src="../assets/Fonction/ressource.svg" style="margin-bottom: 50px">
            <p2>Notre équipe assure le service client 6j/7 <br>9h-18h</p2>
          </div>
          <div class="box col-md-3">
            <h4>Documents</h4>
            <img src="../assets/Fonction/document.svg" style="margin-bottom: 50px">
            <p2>Consultez la liste de vos documents officiels d’association</p2>
          </div>
        </div>
        <div class="row offset-md-4">
          <router-link to="#footer"><button class="btn1" type="button">Rester informé</button></router-link>
        </div>
      </div>

<!--      offre intense-->

      <h1 style="margin-bottom: 100px">Toutes les autres fonctionnalités pour votre <br>association avec l’offre payante <span1>Intense*</span1></h1><br>
      <div class="container offset-1">
        <div class="row justify-content-around">
          <div class="box1 col-md-3">
            <h4>Assistance avancée</h4>
            <img src="../assets/Fonction/discord.svg" style="margin-bottom: 50px">
            <p2>Notre équipe assure le service client 7/7, 24h-24h</p2>
            <button class="btn2">Rester informé</button>
          </div>
          <div class="box1 col-md-3">
            <h4>Statistiques</h4>
            <img src="../assets/Fonction/membre.svg" style="margin-bottom: 50px">
            <p2>Voyez en temps réel l’impact de votre activité</p2>
            <button class="btn2">Rester informé</button>
          </div>
          <div class="box1 col-md-3">
            <h4>Gestion trésorierie</h4>
            <img src="../assets/Fonction/document.svg" style="padding-right: 20px; margin-bottom: 50px">
            <p2>Un conseiller vous aide sur la partie financière</p2>
            <button class="btn2">Rester informé</button>
          </div>
        </div>
      </div>

      <!--      Carrousel-->

<!--      <div class="container-fluid d-none d-sm-block d-none d-md-block">-->
<!--        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">-->
<!--          <div class="carousel-inner" style="padding: 20px">-->
<!--            <div class="carousel-item active">-->
<!--              <div class="row boxed">-->
<!--                <div class="box2">-->
<!--                  <h4>Membres</h4>-->
<!--                  <img src="../assets/Fonction/membre2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--                <div class="box2">-->
<!--                  <h4>Messagerie</h4>-->
<!--                  <img src="../assets/Fonction/collab2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--                <div class="box2">-->
<!--                  <h4>Taches</h4>-->
<!--                  <img src="../assets/Fonction/whatapp2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            &lt;!&ndash;              slide 1 &ndash;&gt;-->

<!--            <div class="carousel-item">-->
<!--              <div class="row boxed">-->
<!--                <div class="box2">-->
<!--                  <h4>Messagerie</h4>-->
<!--                  <img src="../assets/Fonction/collab2.svg" style="max-height: 200px" title="">-->
<!--                  <p2>Accedez à une conversation Discord dédiée à votre association</p2>-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--                <div class="box2">-->
<!--                  <h4>Taches</h4>-->
<!--                  <img src="../assets/Fonction/whatapp2.svg" style="max-height: 200px">-->
<!--                  <p2>Accedez à une conversation Discord dédiée à votre association</p2>-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--                <div class="box2">-->
<!--                  <h4>Discord</h4>-->
<!--                  <img src="../assets/Fonction/membre2.svg" style="max-height: 200px">-->
<!--                  <p2>Accedez à une conversation Discord dédiée à votre association</p2>-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            &lt;!&ndash;            slide 2&ndash;&gt;-->


<!--            <div class="carousel-item">-->
<!--              <div class="row boxed">-->
<!--                <div class="box2">-->
<!--                  <h4>Taches</h4>-->
<!--                  <img src="../assets/Fonction/whatapp2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--                <div class="box2">-->
<!--                  <h4>Discord</h4>-->
<!--                  <img src="../assets/Fonction/membre2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--                <div class="box2">-->
<!--                  <h4>Membres</h4>-->
<!--                  <img src="../assets/Fonction/collab2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            &lt;!&ndash;          slide 3&ndash;&gt;-->

<!--            <div class="carousel-item">-->
<!--              <div class="row boxed">-->
<!--                <div class="box2">-->
<!--                  <h4>Discord</h4>-->
<!--                  <img src="../assets/Fonction/membre2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--                <div class="box2">-->
<!--                  <h4>Membres</h4>-->
<!--                  <img src="../assets/Fonction/collab2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--                <div class="box2">-->
<!--                  <h4>Messagerie</h4>-->
<!--                  <img src="../assets/Fonction/whatapp2.svg" style="max-height: 200px">-->
<!--                  <button class="btn-1" type="button">Prendre en main</button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            &lt;!&ndash;slide 4&ndash;&gt;-->


<!--            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">-->
<!--              <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--              <span class="sr-only">Previous</span>-->
<!--            </a>-->
<!--            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">-->
<!--              <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--              <span class="sr-only">Next</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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
  padding-top: 150px;
  padding-bottom: 150px;
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
  color: #400186;
}

span1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 101.8%;
  /* identical to box height, or 59px */
  letter-spacing: -0.01em;
  /* Text */
  color: #FDC34A;
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
  background: #FFFFFF;
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

  color: #400186;
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


.box1 {
  margin-right: auto;
  background: #FFFFFF;
  /* Shadow_step */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 40px;
  text-align: center;
  width: 280px;
  height: 550px;
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


.carousel-control-prev-icon {
  margin-right: auto;
}

.carousel-control-next-icon {
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
  max-width: 280px;
  height: 500px;
}

.btn-1 {
  background: #FD4C6F;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  margin-top: 40px;
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

.btn2 {
  background: #FDC34A;
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

a{
  text-decoration:none;
}

</style>
