<template>
  <Container>
    <TitresH1> Accueil </TitresH1>

    <TextesParagraphe> Bienvenue sur le site. </TextesParagraphe>

    <TitresH2> Documentation </TitresH2>
    <ListsGrid>
      <li>
        <CardsIconCard to="/docs/composants">
          <template #icon>
            <i
              class="ri-list-indefinite text-green-500 group-hover:text-green-700"
            ></i>
          </template>
          Composants
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/layouts">
          <template #icon>
            <i
              class="ri-layout-line text-blue-500 group-hover:text-blue-700"
            ></i>
          </template>
          Layouts
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/icones">
          <template #icon>
            <i class="ri-heart-line text-red-500 group-hover:text-red-700"></i>
          </template>
          Icones
        </CardsIconCard>
      </li>
    </ListsGrid>
  </Container>
</template>
