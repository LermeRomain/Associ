<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-12 col-sm-12">
        <h1><span>Retour d'expérienc</span>e</h1>
      </div>
      <div id="demo" class="carousel slide" data-ride="carousel">

        <!-- Indicators -->
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <!-- The slideshow -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/la.jpg" alt="Los Angeles">
          </div>
          <div class="carousel-item">
            <img src="../assets/chicago.jpg" alt="Chicago">
          </div>
          <div class="carousel-item">
            <img src="../assets/ny.jpg" alt="New York">
          </div>
        </div>

        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Retour"
}
</script>

<style scoped>

.container {
  margin-top: 150px;
}

h1 {
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #1A1D32;
  text-align: center;
  padding-bottom: 15px;

}

p {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  color: #093046;
  opacity: 0.7;
}

span{
  background-image: url("../assets/backSpan.png");
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #1A1D32;
  padding-bottom: 15px;
}


.carousel-inner img {
  width: 100%;
  height: 100%;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-size: 100%, 100%;
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: #404DEF;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: #404DEF;
}
</style>