<template>
  <div class="container-fluid">
    <div class="row offset-md-1">
      <div class="col-12 col-md-6">
        <h1>Le blog</h1>
      </div>
    </div>
    <div class="container-fluid row offset-md-1">
      <div class="col-md-3">
        <h2>Webinaire</h2>
        <div class="block">
          <p class="title1" style="float: right; color: #FD4C6F; margin-right: 16px">Financement</p>
        </div>
        <p>Vous avez un projet d’associations mais vous n’êtes pas encore majeur ?</p>
        <a style="color: #404DEF">Voir l'article ></a>
      </div>
      <div class="col-md-3">
        <h2>Guide de création</h2>
        <div class="block">
          <p class="title1" style="float: right; color: #404DEF; margin-right: 16px">Communauté</p>
        </div>
        <p>Vous avez un projet d’associations mais vous n’êtes pas encore majeur ?</p>
        <a style="color: #404DEF">Voir l'article ></a>
      </div>
      <div class="col-md-3">
        <h2>Communauté Discord</h2>
        <div class="block">
          <p class="title1" style="float: right; color: #404DEF; margin-right: 16px">Communauté</p>
        </div>
        <p>Vous avez un projet d’associations mais vous n’êtes pas encore majeur ?</p>
        <a style="color: #404DEF">Voir l'article ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style scoped>

.container-fluid {
  margin-top: 50px;
  padding-right: 0px;
}

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */
  margin-top: 16px;

  /* Text */

  color: #093046;
}

h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 58px;
  line-height: 101.8%;
  /* identical to box height, or 59px */

  letter-spacing: -0.01em;

  /* Text */

  color: #093046;

}

h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 101.8%;
  /* identical to box height, or 59px */

  letter-spacing: -0.01em;

  /* Text */

  color: #400186;
}


.btn {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: #FFFFFF;
  line-height: 100.8%;

  background: #400186;
  border-color: #400186;
  border: 2px solid #400186;
  border-radius: 40px;
  padding: 16px 24px;

}

button:hover {
  text-decoration-line: none;
  background: #FFFFFF;
  color: #400186;
  box-sizing: border-box;
  border-radius: 50px;
}

.col-md-3 {
  margin-top: 50px;
  margin-right: 50px;
  padding-left: 0px;
}

.block {
  background: #FFFFFF;
  /* Shadow_step */

  box-shadow: 4px 10px 24px 2px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  width: auto;
  height: 265px;
}

.container {
  margin-top: 240px;
  background-color: #F9F9F9;
  border-radius: 25px;
  padding: 58px;
}

</style>