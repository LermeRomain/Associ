<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>Lancez rapidement votre association</h1>
        <p>Démarrez rapidement et suivez vos idées.
          <br>Moins d’efforts, moins de difficultés, plus de résultats.</p>
      </div>
    </div>
      <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-5">
                <h2>1</h2>
              <p1>Créez votre compte gratuitement</p1>
            </div>
            <div class="col-12 col-sm-12 col-md-5 offset-md-2">
                <h2>2</h2>
              <p1>Renseignez quelques informations sur votre projet associatif</p1>
            </div>
            <div class="col-12  col-sm-12 col-md-5">
                <h2>3</h2>
              <p1>Choisissez un modèle de suivi</p1>
            </div>
            <div class="col-12 col-sm-12 col-md-5 offset-md-2">
                <h2>4</h2>
              <p1>Créer votre association</p1>
            </div>
        </div>
        <div class="col-10">
          <button class="btn" type="button" >Guide de création</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Lancement"
}
</script>

<style scoped>
h1{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 101.8%;

  letter-spacing: -0.01em;

  color: #093046;
  text-align: center;
}

h2{

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  /* or 24px */

  text-align: center;
  color: #F9F9F9;
  background: #57B9B3;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-top: 7px;
  padding-top: 7px;

}

p{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #1A1D32;
  opacity: 0.7;
  padding-bottom: 30px;
  text-align: center;
}
p1{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Text */

  color: #093046;
}

img{
  width: 100%;
}


.btn{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: #FFFFFF;

  background: #219EBC;
  width: auto;
  height: 90px;
  border-radius: 40px;

  margin-top: 25px;
}

.col-md-5{
  background: #FFFFFF;
  /* Shadow_step */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  align-items: center;
  margin-top: 30px;
  text-align: center;
}

.container-fluid{
  width: 90%;
}

</style>