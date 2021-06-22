<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light ">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
       <a href=""><img src="../assets/logo.svg" alt="Logo de l'organisme Associ"></a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="https://associ-blog.000webhostapp.com">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">Qui sommes nous?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#login">Ressources</a>
          </li>
        </ul>
        <ul class="form-inline my-2 my-lg-0">
          <a class="nav-link" href="/#login">Créer mon association</a>
          <li class="active">
            <router-link :to="'/Legale'"><a class="nav-link active" href="#" title="Lien vers la page de connexion">Se connecter</a></router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

</template>


<script>
export default {
  name: 'Header'

}

</script>


<style scoped>

img {
  height: 37px;
}

.navbar-nav a {
  text-decoration-line: none;
}

.nav-link {
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  color: #7D8790;
  padding: 10px;
  position: relative;
}

.nav-link:not(.active) hover {
  color: #404DEF;
  margin-left: 5px;
  margin-right: 5px;
}

.nav-link:not(.active):hover:after {
  content: '';
  display: block;
  width: 100%;
  height: 20px;
  background-image: url("../assets/point.svg");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 0;
}

.active {
  background: #404DEF;
  border-radius: 40px;
  color: white;
}

.active:hover {
  text-decoration-line: none;
  background: #FFFFFF;
  border: 2px solid #404DEF;
  color: #404DEF;
  box-sizing: border-box;
  border-radius: 50px;
}

</style>
