<template>
  <div class="container d-none d-sm-block d-none d-md-block col-lg-12">
    <div class="carousel">
      <div class="carousel__face"><span></span></div>
      <div class="carousel__face"><span></span></div>
      <div class="carousel__face"><span></span></div>
      <div class="carousel__face"><span></span></div>
      <div class="carousel__face"><span></span></div>
      <div class="carousel__face"><span></span></div>
      <div class="carousel__face"><span></span></div>
      <div class="carousel__face"><span></span></div>
      <div class="carousel__face"><span></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carrousel"
}
</script>

<style scoped>
body {
  margin: 0;
  background: lightgray;
  text-align: center;
  font-family: sans-serif;
  color: #fefefe;
}
.container {
  position: relative;
  width: 300px;
  margin: 100px auto 0 auto;
  perspective: 1000px;
}

.carousel {
  transform-style: preserve-3d;
  animation: rotate360 180s infinite forwards linear;
}
.carousel__face {
  position: absolute;
  width: 300px;
  height: 187px;
  top: 20px;
  left: 10px;
  right: 10px;
  background-size: cover;
  display: flex;
}

span {
  margin: auto;
  font-size: 2rem;
}


.carousel__face:nth-child(1) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY(  0deg) translateZ(430px); }
.carousel__face:nth-child(2) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY( 40deg) translateZ(430px); }
.carousel__face:nth-child(3) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY( 80deg) translateZ(430px); }
.carousel__face:nth-child(4) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY(120deg) translateZ(430px); }
.carousel__face:nth-child(5) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY(160deg) translateZ(430px); }
.carousel__face:nth-child(6) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY(200deg) translateZ(430px); }
.carousel__face:nth-child(7) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY(240deg) translateZ(430px); }
.carousel__face:nth-child(8) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY(280deg) translateZ(430px); }
.carousel__face:nth-child(9) {
  background-image: url("../assets/Avis1.png");
  transform: rotateY(320deg) translateZ(430px); }



@keyframes rotate360 {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}

</style>