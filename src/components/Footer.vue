<template>
  <div class="footer">
    <div class="container text-center">
      <div class="row container-fluid">
        <div class="col-md-2 text-center block_2">
          <img class="logo_Footer" src="../assets/logo.svg">
            <a href="https://www.instagram.com/associ.officiel/"><i class="fab fa-instagram active"></i></a>
            <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-tiktok active"></i></a>
            <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-whatsapp active"></i></a>
        </div>


        <div class="col-md-2 text-center block_2">
          <h1>Pages</h1>
          <div class="menub">
            <a href="#">Blog</a>
            <a href="#">Qui sommes-nous ?</a>
            <a href="#">Ressources</a>
          </div>
        </div>

        <div class="col-md-2 text-center block_2">
          <h1>Informations</h1>
          <div class="menub">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de cookies</a>
            <a href="#">Presse</a>
          </div>
        </div>

        <div class="col-md-6 text-left block_2">
          <h1>Contactez-nous</h1>
          <div class="menub">
            <input type="email" name="EMAIL" id="email" placeholder="Entrer votre email">
            <p1><input type="checkbox">  Associ vous informe, que l'on collectera les données personnelles dans le cadre réglementé du RGPD. Pour
              plus d’informations, nous vous invitons à vous rendre sur notre page de <span>Politique de confidentialité.</span>
            </p1>
            <input type="submit" class="button float-left" value="Validé">
          </div>
        </div>
      </div>
      <p>Tous droits réservés© Associ</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Footer'
}

</script>


<style>

a {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  /* identical to box height, or 150% */


  /* Text */

  color: #093046;

}

p {
  font-weight: lighter;
}

p1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  /* identical to box height, or 150% */
  color: #093046;

}

a:hover {
  transform: scale(1.1);
}

.block_2 {
  padding-bottom: 50px;
}

h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  text-align: left;
  /* identical to box height */


  /* Text */

  color: #093046;

}

.menub {
  display: grid;
}

.fab {
  font-size: 20px;
  color: #404DEF;
  margin: 10px;

}

.fab:hover {
  transform: scale(1.05);
}

.footer {
  background-color: #F0F1FE;
  padding-top: 40px;

}


.button {
  background: #404DEF;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 100.8%;
  width: 25%;
  height: 50px;
  border-radius: 40px;

  color: #FFFFFF;
}

.button:hover{
  text-decoration-line: none;
  background: #FFFFFF;
  border: 2px solid #404DEF;
  color: #404DEF;
  box-sizing: border-box;
  border-radius: 50px;
}

span {
  color: #404DEF;
  font-family: Roboto;
}

placeholder{
  font-family: Roboto;
}

</style>
