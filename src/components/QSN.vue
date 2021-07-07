<template>
  <div>
    <div class="container-fluid background">
      <div class="row">
        <div class="col-md-6 offset-md-1">
          <h1>
            Associ, accompagnateur des jeunes ambitieux
          </h1>
          <p>
            Grâce à notre plateforme, nous souhaitons aider les jeunes dans la création et la gestion des associations
            qui leurs tiennent à coeur.
            Nous décidons de miser sur l’esprit d’équipe des adolescents ainsi que leur préoccupation sur le monde qui
            les entour.
            Voir des adolescents se lancer pour ce qu’ils aiment nous a à notre tour motivé à nous lancer dans ce
            projet, à nous désormais de les aider et leur donner la motivation suffisante.
          </p>
        </div>
        <div class="col-md-5">
          <img src="../assets/solar.svg" class="d-none d-md-block" style="width: 100%; margin-top: 100px">
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <h2 class="offset-md-1">
        Nos valeurs
      </h2>
      <div class="row offset-md-1">
        <div class="col-md-5">
          <img src="../assets/trophy.svg">
          <h3>L’esprit d’équipe</h3>
          <p1>Savoir travailler en équipe est essentiel dans toute activité, surtout quand on sait qu’il est nécésaire
            d’être deux pour créer une association.
            Nous mettons en avant l’esprit d’équipe que ce soit entre les membres de l’association ou dans notre
            relation
            avec ceux qui décident de nous faire confiance.
          </p1>
        </div>
        <div class="col-md-5">
          <img src="../assets/high.svg">
          <h3>La confiance</h3>
          <p1>La confiance est la base de toute relation, nous avons une confiance absole envers la jeunesse, ses
            ambitions et son envie de créer un monde meilleur.
            Nous souhaitons augmenter la confiance qu’ont les adolescents en eux-même en leur donnant un coup de pouce
            dans leurs projets.
            Nous faisons de notre mieux pour que cette confiance soit reciproque, pour cela nous travaillons dur pour
            atteindre voir dépasser les attentes des jeunes qui s’engagent.
          </p1>
        </div>
      </div>

      <div class="row offset-md-1" style="margin-top: 60px;padding-bottom: 20%">
        <div class="col-md-5">
          <img src="../assets/mains.svg">
          <h3>L’entraide</h3>
          <p1>Pourquoi créé-t-on une association ?<br>
            Pour que des personnes avec les mêmes valeurs ou centres d’interet puissent s’entraider au quotidien.
            Cette entraide et camaraderie nous souhaitons l’entretenir avec ces jeunes ambitieux.
          </p1>
        </div>
        <div class="col-md-5">
          <img src="../assets/smile.svg">
          <h3>La positivité</h3>
          <p1>
            Donner de son temps pour quelque chose qui nous plait. Les association font plaisir à la fois aux bénévols
            et à ceux qui bénéficient de leur travail.
            Ce plaisir nous le ressentons chaque jour au contact de ces jeunes pleins d’ambitions.
          </p1>
        </div>
      </div>
    </div>
    <div class="container-fluid background2">
      <div class="row" style="margin-top: 150px">
        <div class="col-12 text-center" style="margin-top: 15%">
          <h1>Rejoignez-nous sur Discord</h1>
          <p>
            Vous pouvez nous rencontrer et communiquer avec nous dès maintenant grâce à la communauté Discord
          </p>
          <div>
            <button class="btn">Rejoindre la communauté</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QSN"
}
</script>

<style scoped>

.container-fluid {
  margin-top: 70px;
  height: 768px;
}

.background {
  background-image: url("../assets/Backrose.svg");
}

.background2 {
  background-image: url("../assets/Backrose2.svg");
  height: 713px;
}


h1 {
  color: #FFFFFF;
  font-size: 58px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 50px;
}

P {
  color: #FFFFFF;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 20px;
  margin-bottom: 50px;
}

P1 {
  color: black;
  font-size: 20px;
  font-family: Roboto;
  margin-top: 20px;
  margin-bottom: 50px;
}


h2 {
  color: black;
  font-size: 58px;
  font-family: Roboto;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
}

h3 {
  color: black;
  font-size: 32px;
  font-family: Roboto;
}

.btn {
  font-family: Roboto;
  font-size: 20px;
  padding: 16px 24px;
  background: #FFFFFF;
  border-radius: 50px;
}

</style>