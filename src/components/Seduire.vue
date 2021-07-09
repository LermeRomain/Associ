<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 offset-1">
        <h1>Laisse-toi séduire...</h1>
        <p>Sois guidé par notre quiz pour mieux définir ton <br>projet associatif.</p>
        <router-link to="/quizz"><button class="btn" type="button">Démarrer le quizz</button></router-link>
      </div>
      <div class="col-md-4 offset-md-2">
        <img src="../assets/love.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Seduire"
}
</script>

<style scoped>

.container-fluid {
  background-image: url("../assets/gradiant.svg");
  height: 748px;
  width: auto;
}

h1 {
  font-family: Roboto;
  font-weight: bold;
  font-size: 58px;
  color: #FFFFFF;
}

p {
  font-family: Roboto;
  font-size: 20px;
  color: #FFFFFF;
}


.btn {
  display: flex;
  margin-top: 7%;
  margin-bottom: 10px;
  background: #FD4C6F;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: left;
  border-color: #FD4C6F;
  border: 2px solid #FD4C6F;

  color: #FFFFFF;
}


.btn:hover {
  text-decoration-line: none;
  background: none;
  color: #FFFFFF;
  border-color: white;
}

.col-md-4 {
  margin-top: 15%;
}

a{
  text-decoration:none;
}

@media screen and (max-width: 1275px) {
  img {
    display: none;
  }

}

@media screen and (max-width: 768px) {
  .col-md-2 {
    margin-top: 2%;
  }
}
</style>