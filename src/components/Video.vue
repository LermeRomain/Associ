<template>
  <div class="background container-fluid" id="video">
    <div class="banner_content container">
      <div class="row">
        <div class="col-md-6">
          <h1>Ici c'est le h1</h1>
          <p>Zone de txt</p>
          <button class="btn btn-dark" type="button" >Boutton</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Video'

}
</script>

<style scoped>

.facebook {

}



h1, p {
  color: white;
  padding-bottom: 5px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
}

p{
  font-size: 15px;
  font-weight: lighter;
}

.col-md-6 {
  padding: 15px;
}

.background{
  padding-top:70px;
  background-color: #FECF98;
  padding-bottom: 70px;
}

.btn:hover {
  transform: scale(1.1);
}



@media screen and (max-width: 1300px){
  #video {
    width: 400px;
    height: 220px;
  }
}
</style>
