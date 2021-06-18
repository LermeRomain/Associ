<template>
  <div class="background container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
              <h1><span> Créez votre</span> association</h1>
              <p id="txt1">Associ vous aidera dans la création de votre association. À partir de 16 ans, vous aurez la possibilité avec un associé de la créer sans personne majeure à vos côtés. De l’administratif à la gestion de la trésorerie, nous vous accompagnerons tout au long de votre vie associative.</p>
            <button class="btn" type="button" >Créer mon association</button>
          </div>
        <div class="d-none d-sm-block d-none d-md-block col-md-6">
          <img src="../assets/teams.svg" alt="Illustrations d'un groupe d'adolescent">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Banner'

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
  background: #404DEF;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 19px;
  padding: 24px 32px;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;
}


.btn:hover {
  transform: scale(1.05);
}
</style>
