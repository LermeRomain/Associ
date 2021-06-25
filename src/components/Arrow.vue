<template>
  <div class="test2">
  <div class="arrow">
    <button class="btn" data-toggle="modal" data-target="#exampleModalCenter"><img src="../assets/Call.svg">
    </button>
  </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Démarrez une conversation</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="fermer" aria-hidden="true">Fermer</span>
            </button>
          </div>
          <div class="content">
            <div class="test text-center">
              <h2>WhatsApp</h2>
              <p1>Rejoingnez la team</p1>
            </div>
            <div class="test text-center">
              <h2>Etre rappelé</h2>
              <p1>Réservez un créneau horaire</p1>
            </div>
            <div class="test text-center">
              <h2>Email</h2>
              <p1>Envoyez-nous un email et nous vous répondrons dans les meilleurs délais</p1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Arrow'
};

</script>


<style scoped>

/* arrow*/
.arrow {
  position: fixed;
  bottom: 20px;
  right: 20px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  transition: width 0.5s, height 0.5s, transform 0.5s;
  outline: none;
}

.arrow img {
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 30px;
  background: white;


  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25));
}



.modal-title{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 110%;
  /* identical to box height, or 64px */

  text-align: center;
  letter-spacing: -0.01em;

  /* Color_primary */

  color: #404DEF;
}

.fermer{
  color: grey;
  font-family: Roboto;
  font-size: 20px;
}

h5{
  font-family: Roboto;
  font-size: 30px;
}

.test{
  margin-left: auto;
  margin-right: auto;
  background: #FFFFFF;
  /* Shadow_step */
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  margin-top: 40px;
  text-align: center;
  width: 250px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 33px;
}

.test h2{
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
}

.content{
  display: flex;
  column-gap: 20px;
  padding: 20px;
}

.modal-dialog {
  max-width: 60%;
}

.btn{

}

</style>
