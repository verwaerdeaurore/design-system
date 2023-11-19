<script setup>
import { codeListeLienIcone } from "./code/listes";

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Listes </TitresH1>

    <TextesParagraphe>
      Utilisez les listes pour structurer le contenu de vos pages.
    </TextesParagraphe>

    <TitresH2>Liste de liens avec icones</TitresH2>

    <ListsBasic>
      <li>
        <CardsIconLink to="/docs/composants">
          <template #icon>
            <i class="ri-list-indefinite"></i>
          </template>
          Composants
        </CardsIconLink>
      </li>

      <li>
        <CardsIconLink to="/docs/layouts">
          <template #icon>
            <i class="ri-layout-line"></i>
          </template>
          Layouts
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/icones">
          <template #icon>
            <i class="ri-heart-line"></i>
          </template>
          Icones
        </CardsIconLink>
      </li>
    </ListsBasic>

    <TextesCode :code="codeListeLienIcone" />
  </Container>
</template>
