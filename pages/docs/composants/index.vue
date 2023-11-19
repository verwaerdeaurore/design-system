<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Composants </TitresH1>

    <TextesParagraphe>
      Les composants sont des éléments de base de l'interface. Ils sont utilisés
      pour construire les pages.
    </TextesParagraphe>

    <ListsBasic>
      <li>
        <CardsIconLink to="/docs/composants/titres">
          <template #icon>
            <i class="ri-h-1"></i>
          </template>
          Titres
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/textes">
          <template #icon>
            <i class="ri-paragraph"></i>
          </template>
          Textes
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/boutons">
          <template #icon>
            <i class="ri-coin-line"></i>
          </template>
          Boutons
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/liens">
          <template #icon>
            <i class="ri-link"></i>
          </template>
          Liens
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/listes">
          <template #icon>
            <i class="ri-list-ordered"></i>
          </template>
          Listes
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/navs">
          <template #icon>
            <i class="ri-menu-line"></i>
          </template>
          Navs
        </CardsIconLink>
      </li>
      <li>
        <CardsIconLink to="/docs/composants/inputs">
          <template #icon>
            <i class="ri-input-method-line"></i>
          </template>
          Inputs
        </CardsIconLink>
      </li>
    </ListsBasic>
  </Container>
</template>
