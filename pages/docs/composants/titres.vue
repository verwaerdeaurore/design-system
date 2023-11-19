<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Titres </TitresH1>

    <TitresH1>Titre de niveau 1</TitresH1>

    <TextesCode :code="`<TitresH1>Titre de niveau 1</TitresH1>`" />

    <TitresH2>Titre de niveau 2</TitresH2>

    <TextesCode :code="`<TitresH2>Titre de niveau 2</TitresH2>`" />

    <TitresH3>Titre de niveau 3</TitresH3>

    <TextesCode :code="`<TitresH3>Titre de niveau 3</TitresH3>`" />

    <TitresH4>Titre de niveau 4</TitresH4>

    <TextesCode :code="`<TitresH4>Titre de niveau 4</TitresH4>`" />
  </Container>
</template>
