<template>
  <Container>
    <TitresTitre1> Layouts </TitresTitre1>

    <TitresTitre2> App Layout </TitresTitre2>

    <div class="ring-2 ring-gray-200/75 my-8">
      <LayoutsAppLayout
        ><Container> <div>Contenu de la page</div></Container>
      </LayoutsAppLayout>
    </div>

    <TextesCode
      :code="`<LayoutsAppLayout>
    <Container>
        <div>Contenu de la page</div>
    </Container>
</LayoutsAppLayout>
`"
    />

    <TitresTitre2> Container </TitresTitre2>

    <TextesCode
      :code="`<Container>
    Contenu
</Container>
`"
    />
  </Container>
</template>
