<template>
  <Container>
    <TitresH1> Documentation </TitresH1>

    <TextesParagraphe>
      Bienvenue sur la documentation du Design System.
    </TextesParagraphe>

    <TitresH2> Composants </TitresH2>
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
  </Container>
</template>
