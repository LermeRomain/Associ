<template>
    <div class="services container-fluid" id="services">
<div class="container">
        <div class="row container">
          <div class="icon col-md-4 text-center">
          </div>

          <div class="icon col-md-4 text-center">
          </div>

          <div class="icon col-md-4 text-center">
          </div>
        </div>
        </div>
	</div>

</template>


<script>

export default {
    name:'Services'
}

</script>


<style scoped>



@media screen and (max-width: 1300px){
  .icon {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  img {width: 30%}
}


.service .container {
  background-color: #444444;
}

#services {
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #f2f2f2;


}

h4 {
  margin: 15px;
  font-weight: bold;
}

p {
  font-size: 12px;
  font-weight: lighter;
}

</style>
