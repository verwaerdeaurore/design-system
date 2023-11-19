<script setup>
import { image, imageGrid } from "./code/images";
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1>Images</TitresH1>

    <TextesParagraphe>
      Vous pouvez utilisez les images dans vos projets.
    </TextesParagraphe>

    <TitresH2>Exemples</TitresH2>

    <TitresH3>Image simple</TitresH3>

    <Image class="max-w-sm mt-12 mb-4" src="/img/test.png" alt="test" />

    <TextesCode :code="image" />

    <TitresH3>Grille d'images</TitresH3>

    <ListsGrid class="mt-12 mb-4">
      <li><Image class="max-w-sm" src="/img/test.png" alt="test" /></li>
      <li><Image class="max-w-sm" src="/img/test.png" alt="test" /></li>
      <li><Image class="max-w-sm" src="/img/test.png" alt="test" /></li>
      <li><Image class="max-w-sm" src="/img/test.png" alt="test" /></li>
      <li><Image class="max-w-sm" src="/img/test.png" alt="test" /></li>
      <li><Image class="max-w-sm" src="/img/test.png" alt="test" /></li>
    </ListsGrid>

    <TextesCode :code="imageGrid" />
  </Container>
</template>
