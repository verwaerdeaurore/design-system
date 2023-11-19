<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Boutons </TitresH1>

    <TextesParagraphe>
      Utilisez les différents types de boutons pour mettre de l'enphase sur les
      actions de votre application.
    </TextesParagraphe>

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
