<template>
  <div class="container-fluid">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <a class="navbar-brand d-lg-none d-md-none d-sm-block" href="#">
        <router-link to="/"><img src="../assets/icon.svg" width="30" height="30" alt=""></router-link>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-md-10 offset-1" id="navbarTogglerDemo01">
        <router-link to="/"><a href="#" style="margin-right:15px"><img src="../assets/logo.svg"
                                                                       alt="Logo de l'organisme Associ" style="width: auto"></a>
        </router-link>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/fonctionnalités"><a routerLink="/fonctionnalités" class="nav-link" style="margin-right:15px">Fonctionnalités</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/webinaire"><a routerLink="/webinaire" class="nav-link" style="margin-right:15px">Webinaires</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blogs"><a routerLink="/blogs" class="nav-link" style="margin-right:15px">Blog</a></router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" data-toggle="dropdown"
               aria-expanded="false" style="margin-right:15px">
              Équipe
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <router-link to="/qui-sommes-nous">
                <li><a routerLink="/qui-sommes-nous" class="dropdown-item">Qui sommes-nous ?</a></li>
              </router-link>
              <router-link to="/presse">
                <li><a routerLink="/presse" class="dropdown-item">Presse</a></li>
              </router-link>
              <router-link to="/contacter">
                <li><a routerLink="/contacter" class="dropdown-item">Contactez-nous</a></li>
              </router-link>
              <li>
                <a href="https://www.instagram.com/associ.officiel/" target="_blank" rel="dofollow"><img
                    src="../assets/header/insta.svg" alt="logo instagram" style="width: 20%; margin-left: 15px"></a>
                <a href="https://vm.tiktok.com/ZMdeewBJb/" target="_blank" rel="dofollow"><img src="../assets/header/tiktok.svg"
                                                                                alt="logo tiktok" style="width: 20%; margin-left: 15px"></a>
                <a href="https://discord.gg/GuSa7w7U" target="_blank" rel="dofollow"><img src="../assets/header/discord.svg"
                                                                           alt="logo discord" style="width: 20%; margin-left: 15px"></a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/tarifs"><a routerLink="/tarifs" class="nav-link" href="#about" style="margin-right:15px">Tarifs</a></router-link>
          </li>
        </ul>
        <ul class="form-inline my-2 my-lg-0">
          <li class="active">
            <router-link to="/quizz" style="text-decoration-line: none"><a routerLink="/quizz" class="nav-link active"
                                                                           title="Lien vers la page de connexion">Démarrer
              le quizz</a></router-link>
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

.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}

.navbar {
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

.dropdown-item {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #400186;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0px;
  vertical-align: 0px;
  content: url("../assets/fleche.svg");
  border-top: none;
  border-right: none;
  border-bottom: 0;
  border-left: none;
}

</style>
