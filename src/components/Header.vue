<template>
  <div class="container-fluid">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-md-10 offset-1" id="navbarTogglerDemo01">
        <router-link to="/"><a href="#" style="margin-right:15px"><img src="../assets/logo.svg" alt="Logo de l'organisme Associ"></a></router-link>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/Fonctionnalite"><a class="nav-link">Fonctionnalités</a></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Formation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://associ.medium.com/">Blog</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" data-toggle="dropdown" aria-expanded="false">
              Entreprise
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="#">Qui sommes-nous ?</a></li>
              <li><a class="dropdown-item" href="#">Presse</a></li>
              <li><a class="dropdown-item" href="#">Contactez-nous</a></li>
              <li>
                <a href="https://www.instagram.com/associ.officiel/"><i class="fab fa-instagram fab1"></i></a>
                <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-tiktok"></i></a>
                <a href="https://vm.tiktok.com/ZMdeewBJb/"><i class="fab fa-discord"></i></a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">Tarifs</a>
          </li>
        </ul>
        <ul class="form-inline my-2 my-lg-0">
          <li class="active">
            <a class="nav-link active" href="#" title="Lien vers la page de connexion">Démarrer le quizz</a>
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

.container-fluid{
  padding-left: 0px;
  padding-right: 0px;
}

.navbar{
  padding-left: 5px;
  padding-right: 5px;
  background: #FFFFFF;
}

img {
  height: 37px;
}

.navbar-nav a {
  text-decoration-line: none;
}

.nav-link {
  font-family: 'Roboto';
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  color: #7D8790;
  position: relative;
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
  background: #400186;
  border-radius: 40px;
  color: white;
  border: 1px solid #400186;
}


.nav-link.active:hover {
  text-decoration-line: none;
  background: #FFFFFF;
  color: #400186;
  box-sizing: border-box;
}

a:hover {
  color: #400186;
}



.fab {
  font-size: 30px;
  color: #400186;
  margin-right: 20px;
  margin-top: 30px;
  margin-left: 10px;

}

.fab.fab1 {
  font-size: 30px;
  color: #400186;
  margin-right: 20px;
  margin-top: 30px;
  margin-left: 25px;
  margin-bottom: 15px;

}
.dropdown-item{
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #400186;
}
</style>
