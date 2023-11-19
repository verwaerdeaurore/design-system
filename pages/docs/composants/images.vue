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

    <TextesParagraphe>
      Les images doivent être placées dans le dossier <code>/public/img</code> à
      la racine
    </TextesParagraphe>

    <TitresH3>Image simple</TitresH3>

    <Image class="max-w-sm mt-12 mb-4" src="/img/test.png" alt="test" />

    <TextesCode :code="image" />

    <TitresH3>Grille d'images</TitresH3>

    <ListsGrid class="mt-12 mb-4">
      <li><Image src="/img/test.png" alt="test" /></li>
      <li><Image src="/img/test.png" alt="test" /></li>
      <li><Image src="/img/test.png" alt="test" /></li>
      <li><Image src="/img/test.png" alt="test" /></li>
      <li><Image src="/img/test.png" alt="test" /></li>
      <li><Image src="/img/test.png" alt="test" /></li>
    </ListsGrid>

    <TextesCode :code="imageGrid" />
  </Container>
</template>
