<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Sous le charme ?</h1>
        <p>Saisissez votre opportunité</p>
        <div class="row offset-md-4">
          <a href="https://discord.gg/GuSa7w7U" target="_blank" rel="dofollow"><button class="btn" type="button">Rejoindre la communauté</button></a>
          <router-link to="/quizz"><button class="btn1" type="button">Démarrer le quizz</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Charme"
}
</script>

<style scoped>
.container-fluid {
  background-image: url("../assets/radiant2.svg");
  height: 713px;
  width: 100%;
  background-color: #F9F9F9;
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

.btn1:hover {
  text-decoration-line: none;
  background: none;
  color: #400186;
  border-color: #400186;
}

.col-md-12 {
  margin-top: 20%;
}

a{
  text-decoration:none;
}

@media screen and (max-width: 768px) {
  .col-md-12 {
    margin-top: 50%;
  }
}
</style>