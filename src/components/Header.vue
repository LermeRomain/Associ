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
            <a class="nav-link" href="#nav">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">Qui sommes nous?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://associ-blog.000webhostapp.com">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#login">Presse</a>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/associ.officiel/"><i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item"> <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-tiktok"></i></a></li>
          <li class="nav-item"> <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-whatsapp"></i></a></li>
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
  box-shadow: 0px 100px 161px rgba(245, 155, 90, 0.08), 0px 64.8148px 94.2894px rgba(245, 155, 90, 0.0607407), 0px 38.5185px 51.2815px rgba(245, 155, 90, 0.0485926), 0px 20px 26.1625px rgba(245, 155, 90, 0.04), 0px 8.14815px 13.1185px rgba(245, 155, 90, 0.0314074), 0px 1.85185px 6.33565px rgba(245, 155, 90, 0.0192593);
  border-radius: 40px;
  color: white;
}

.active:hover {
  transform: scale(1.05);
  text-decoration-line: none;
  margin-left: 10px;
}

.fab{
  color: #7D8790;
  padding: 4px;
  position: relative;
}

.fab:hover{
  color: #404DEF;
  margin-left: 5px;
  margin-right: 5px;
}

.fab:hover:after{
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

</style>
