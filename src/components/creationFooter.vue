<template>
  <div class="background container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-5 offset-md-1">
          <h1><span> Créez votre</span> association</h1>
          <p id="txt1">Démarrez gratuitement la création de votre association.
            Aucun moyen de paiement requis, pas de limite de temps.</p>
          <button class="btn" type="button" >Créer mon association</button>
        </div>
        <div class="d-none d-sm-block d-none d-md-block col-md-5">
          <img src="../assets/community.svg" alt="Illustrations de la communauté de Associ">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "creationFooter"
}
</script>

<style scoped>

p{

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #404DEF;
}
#txt1{
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

h1{
  height: 59px;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 58px;
  color: #1A1D32;
  margin-bottom: 90px;
  line-height: 100.8%;
}

span{
  background-image: url("../assets/backSpan.png");
  padding-bottom: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 58px;
  color: #1A1D32;
}


.background{
  padding-top: 100px;
  background-color: white;
  padding-bottom: 100px;
}

img {
  width: 100%;
  height: 100%;
}
.btn {
  display: flex;
  margin-top: 20%;
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
  color: #400186;
  box-sizing: border-box;
  border-radius: 50px;
}

a{
  text-decoration:none;
}
</style>