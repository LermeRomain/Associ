<template>
    <div>
    </div>
</template>


<script>
export default {
	name:'About',
}

</script>



<style scoped>

/* About */

#about {
  padding-top: 5%;
  padding-bottom: 70px;
}
h1 {
  font-size: 40px;
}

span {
  font-weight: bold;
  color: #fb8500;
  text-transform: uppercase;
}

.col-12 {
  padding-top: 80px;
}

.btn {
  display: flex;
  margin-top: 25px;
  background: #219EBC;
  border-radius: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 19px;
  padding: 24px 32px;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;


}

.btn:hover {
  transform: scale(1.05);
}

img{
  width: 100%;
}
iframe{
  margin-top: 15px;
}

.container{
  padding-top: 15px;
  background-color: white;
  padding-left: -50px;
}

@media screen and (max-width: 1300px){
  img {
    padding-top: 100px;
  }
}
</style>
