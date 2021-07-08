<template id="Footer">
  <div class="footer">
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-md-2 text-left offset-1">
          <img class="logo_Footer" src="../assets/logoFooter.svg">
          <div class="text-left">
            <a href="https://www.instagram.com/associ.officiel/" target="_blank"><i class="fab fa-instagram active"></i></a>
            <a href="https://vm.tiktok.com/ZMdeewBJb/" target="_blank"><i class="fab fa-tiktok"></i></a>
            <a href="https://discord.gg/GuSa7w7U" target="_blank"><i class="fab fa-discord"></i></a>
          </div>
        </div>


        <div class="col-md-2 text-center">
          <h1>Pages</h1>
          <div class="menub">
            <router-link to="/Fonctionnalités"><a>Fonctionnalités</a></router-link>
            <router-link to="/Webinaire"><a>Webinaires</a></router-link>
            <a href="https://associ.medium.com/" target="_blank">Blog</a>
            <router-link to="/Qui_sommes_nous"><a>Equipe</a></router-link>
            <router-link to="/Tarifs"><a>Tarifs</a></router-link>
          </div>
        </div>

        <div class="col-md-2 text-center">
          <h1>Informations</h1>
          <div class="menub">
            <router-link :to="'/Legale'"><a href="#" title="Lien vers la page de mentions légales">Mentions légales</a>
            </router-link>
            <router-link :to="'/Legale'"><a>Politique de cookies</a></router-link>
            <router-link :to="'/Presse'"><a>Presse</a></router-link>
          </div>
        </div>

        <div class="col-md-4 text-center">
          <div id="sib-form-container" class="sib-form-container">
            <div id="sib-container" class="sib-container--large sib-container--vertical"
                 style="text-align:center; background-color:#400186; max-width:540px; padding: 0px">
              <form id="sib-form" method="POST"
                    action="https://b01bfbbf.sibforms.com/serve/MUIEAKN9rd2eqo9z8cE8vnUFwc-fpg7mMyoFuszcFcJVsnIGURcDTxXQH78RzO02CBWFnwKYyixykhTR7Ag5-MAeW6y5OqCIIkB9ODPJMoAZx3c_HOtmDlVqsdKrNcHDPM16-dt8MRtpT_C4_IBu1Y8d4VZz3qc0mzoyI3OEc4fU6Sf40OBW_Y7mC_pA0LxCbjXB4rE3mtCCFE5x">
                <div>
                  <div class="sib-form-block">
                    <h1>Newsletter</h1>
                  </div>
                </div>
                <div>
                  <div class="sib-input sib-form-block">
                    <div class="form__entry entry_block">
                      <div class="form__label-row ">
                        <div class="entry__field"
                             style="  border-radius: 10px; padding: 6px;">
                          <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off"
                                 placeholder="Renseignez votre email"
                                 data-required="true" required style="
                                  border: 1px solid #FFFFFF;
                                  box-sizing: border-box;
                                  padding: 2%;
                                  box-shadow: 3px 6px 29px 3px rgba(0, 0, 0, 0.1);
                                  border-radius: 10px;"/>
                        </div>
                      </div>

                      <label class="entry__error entry__error--primary"
                             style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                      </label>
                      <label class="entry__specification"
                             style="font-size:12px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF;">
                        Veuillez renseigner votre adresse email pour vous inscrire.
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="sib-optin sib-form-block" data-required="true">
                    <div class="form__entry entry_mcq">
                      <div class="form__label-row ">
                        <div class="entry__choice">
                          <label>
                            <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required/>
                            <span class="checkbox checkbox_tick_positive"></span><span
                              style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:transparent;"><p2>Associ vous informe, que l'on collectera les données personnelles dans le cadre réglementé du RGPD. Pour plus d’informations, nous vous invitons à vous rendre sur notre page de <span1>Politique de confidentialité.</span1></p2><span
                              data-required="*" style="display: inline;"
                              class="entry__label entry__label_optin"></span></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                </div>
                <div>
                  <div class="sib-form-block" style="text-align: left">
                    <button class="sib-form-block__button sib-form-block__button-with-loader"
                            style=" background: #FFFFFF;
                              border-radius: 40px;
                              font-family: Roboto;
                              font-style: normal;
                              font-weight: bold;
                              font-size: 20px;
                              line-height: 100.8%;
                              border-radius: 40px;
                              border: 2px solid #FFFFFF;
                              text-align: center;
                              color: #400186;"
                            form="sib-form" type="submit">
                      <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                           viewBox="0 0 512 512">
                        <path
                            d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                        />
                      </svg>
                      Validé
                    </button>
                  </div>
                </div>
                <input type="text" name="email_address_check" value="" class="input--hidden">
                <input type="hidden" name="locale" value="fr">
                <input type="hidden" name="html_type" value="simple">
              </form>
            </div>
          </div>
        </div>
      </div>
      <p style="color: #FFFFFF">Tous droits réservés© Associ</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Footer'
}

</script>


<style scoped>

.container-fluid {
  width: 90%;
}

a {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  /* identical to box height, or 150% */


  /* Text */

  color: #FFFFFF;

}

p {
  font-weight: lighter;
  margin-top: 50px;
  font-family: 'Roboto';
}

p1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  /* identical to box height, or 150% */
  color: #FFFFFF;

}

p2 {
  margin-left: 5px;
}

h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  text-align: left;
  /* identical to box height */


  /* Text */

  color: #FFFFFF;

}

.menub {
  display: grid;
}

.fab {
  font-size: 30px;
  color: #FFFFFF;
  margin-right: 30px;
  margin-top: 30px;
  text-align: left;

}


.fab:hover {
  transform: scale(1.05);
}

.footer {
  background-color: #400186;
  padding-top: 40px;
  padding-bottom: 20px;
}

img {
  width: 150px;
  margin-bottom: 20px;
}

span {
  color: #FFFFFF;
  font-family: Roboto;
}

span1 {
  color: #FFFFFF;
  font-family: Roboto;
}


/*----------- mail*/

@font-face {
  font-display: block;
  font-family: Roboto;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 600;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 700;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
}

#sib-container input:-ms-input-placeholder {
  text-align: left;
  font-family: "Roboto";
}

#sib-container input::placeholder {
  text-align: left;
  font-family: "Roboto";
  color: #c0ccda;
}

.sib-form-block__button-with-loader {
  text-decoration-line: none;
  background: #FFFFFF;
  color: #400186;
  box-sizing: border-box;
}

</style>
