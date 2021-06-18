<template>
 <div class="footer">
   <div class="container text-center">
     <a href="https://www.instagram.com/associ.officiel/"><i class="fab fa-instagram"></i></a>
     <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-tiktok"></i></a>
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

       <div class="col-md-3 text-center">
         <h1>Contactez-nous</h1>
         <div class="menub block_2">
           <input type="email" name="EMAIL" id="email" placeholder="Entrer votre email" >
           <button type="submit" class="button">S'inscrire</button>
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

  text-align: left;
}
p{
  font-weight: lighter;
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

  text-align: left;
}

.menub {
  display: grid;
}

.fab {
  font-size: 20px;
  color: black;
  margin:10px;
  padding-bottom: 40px;

}

.fab:hover{
  color: #FECF98;
}

.footer{
  background-color: #EFF8F8;
  padding-top: 40px;
  padding-bottom: 30px;
  color: black;
}

.button{
  margin: 10px;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
}

</style>
