<template>
 <div class="footer">
   <div class="container text-center">
     <img class="logo_Footer" src="../assets/logoFooter.svg">
     <a href="https://www.instagram.com/associ.officiel/"><i class="fab fa-instagram"></i></a>
     <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-tiktok"></i></a>
     <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-whatsapp"></i></a>
     <div class="row container">
       <div class="col-md-3 text-center block_2">
         <h1>Pages</h1>
         <div class="menub">
         <a href="#">Accueil</a>
           <a href="#">Blog</a>
         <a href="#">Qui sommes-nous ?</a>
         <a href="#">Presse</a>
         </div>
       </div>

       <div class="col-md-3 text-center block_2">
         <h1>Informations</h1>
         <div class="menub">
         <a href="#">Mentions légales</a>
         <a href="#">Politique de cookies</a>
         <a href="#">Confidentialité</a>
           <a href="#">Newsletter</a>
         </div>
       </div>

       <div class="col-md-5 text-center block_2">
         <h1>Contactez-nous</h1>
         <div class="menub">
           <input type="email" name="EMAIL" id="email" placeholder="Entrer votre email" >
           <p1>Associ vous informe, que l'on collectera les données personnelles dans le cadre réglementé du RGPD. Pour plus d’informations, nous vous invitons à vous rendre sur notre page de <span>Politique de confidentialité.</span></p1>
           <button type="submit" class="button">Valider</button>
         </div>
       </div>
     </div>

     <p>Tous droits réservés© Associ</p>
   </div>
 </div>
</template>


<script>
export default {
    name:'Footer'
}

</script>


<style>

a {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  /* identical to box height, or 150% */


  /* Text */

  color: #093046;

}
p{
  font-weight: lighter;
}
p1{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
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
  margin:10px;
  padding-bottom: 40px;

}

.fab:hover{
  transform: scale(1.05);
}

.footer{
  background-color: #F0F1FE;
  padding-top: 40px;
  padding-bottom: 30px;
  color: black;
}


.button{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;

  background: #404DEF;
  width: 50%;
  height: 50px;
  border-radius: 40px;
  display: block;
  margin: auto;
}

span{
  color: #404DEF;
}

.logo_Footer{
  height: 10%;
  width: 10%;
}

</style>
