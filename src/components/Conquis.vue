<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Conquis ?</h1>
        <p>Ne passez pas à côté de l’expérience de votre vie</p>
        <div class="row offset-md-4">
          <button class="btn" type="button">Je rejoins la communauté</button>
          <button class="btn1" type="button">Démarrer le quizz</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conquis"
}
</script>

<style scoped>

.container-fluid {
  background-image: url("../assets/gradiant.svg");
  height: 713px;
  width: 100%;
  margin-top: 462px;
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
  background: #400186;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: left;
  border-color: #400186;
  border: 2px solid #400186;

  color: #FFFFFF;
}


.btn:hover {
  text-decoration-line: none;
  background: none;
  color: #FFFFFF;
  border-color: white;
}

.btn1 {
  display: flex;
  margin-top: 7%;
  margin-bottom: 10px;
  margin-left: 40px;
  background: #FFFFFF;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 16px 24px;
  line-height: 100.8%;
  /* identical to box height */

  text-align: left;
  border-color: #FFFFFF;
  border: 2px solid #FFFFFF;

  color: #400186;
}

.btn1:hover {
  text-decoration-line: none;
  background: none;
  color: #FFFFFF;
  border-color: white;
}

.col-md-12 {
  margin-top: 20%;
}

@media screen and (max-width: 768px) {
  .col-md-12 {
    margin-top: 50%;
  }
}
</style>