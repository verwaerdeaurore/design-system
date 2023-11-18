<template>
  <Container>
    <TitresTitre1> Boutons </TitresTitre1>

    <div class="flex space-x-8 py-4">
      <BoutonsPrimaire>Primaire</BoutonsPrimaire>
      <BoutonsSecondaire>Secondaire</BoutonsSecondaire>
      <BoutonsDanger>Danger</BoutonsDanger>
    </div>

    <TextesCode :code="`<BoutonsPrimaire>Primaire</BoutonsPrimaire>`" />

    <TextesCode :code="`<BoutonsSecondaire>Secondaire</BoutonsSecondaire>`" />

    <TextesCode :code="`<BoutonsDanger>Danger</BoutonsDanger>`" />
  </Container>
</template>
