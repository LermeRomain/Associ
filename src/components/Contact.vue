<template>
  <div class="container-fluid">
    <div class="container text-center contacter">
      <h1>Vous souhaitez nous contacter ?</h1>
      <h2>Choisissez votre moyen de contact</h2>
    </div>
    <div class="container-fluid row contact">
      <div class="col-md-4">
        <div class="block text-center">
          <a href="https://discord.gg/FN6DV8rF" target="_blank">
            <img src="../assets/discord.svg" style="height: 64px; width: 64px">
            <p class="title1">Discord<br><span>Rejoingnez la communauté</span></p>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="block text-center">
          <a href="https://calendly.com/associ" target="_blank">
            <img src="../assets/Tel.svg">
            <p class="title1">Etre rappelé<br><span>Réservez un créneau horaire</span></p>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="block text-center">
          <a href="mailto:votreadresse@mail.fr">
            <img src="../assets/Email.svg">
            <p class="title1">Email<br><span>Envoyez-nous un email</span></p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.block {
  background: #FFFFFF;
  /* Shadow_step */

  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  width: auto;
  height: 265px;
}


.container-fluid {
  margin-top: 100px;
  background-color: #F9F9F9;
  border-radius: 25px;
  padding: 58px;
}

.container {
  margin-top: 100px;
  background-color: #FFFFFF;
  border-radius: 25px;
  padding: 58px;
}

h1 {
  font-family: Roboto;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 32px;
  color: #400186;
}

h2 {
  font-family: Roboto;
  font-weight: bold;
  font-size: 32px;

  color: #400186;
}

p {
  font-family: Roboto;
  font-size: 32px;

}

span {
  font-family: Roboto;
  font-size: 20px;
}

img {
  margin-top: 16px;
  margin-bottom: 25px;
}

a {
  font-family: Roboto;
  font-size: 20px;
  color: #093046;
}

a:hover {
  color: inherit;
  text-decoration-line: none;
}
</style>