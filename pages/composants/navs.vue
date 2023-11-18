<template>
  <Container>
    <TitresTitre1>Navigations</TitresTitre1>

    <TitresTitre2>Barre de navigation</TitresTitre2>

    <div class="ring-2 ring-gray-200/75 my-8">
      <NavsNav>
        <template v-slot:logo>
          <TitresLogo>Logo</TitresLogo>
        </template>

        <template v-slot:links>
          <LinksNavLink to="#">Accueil</LinksNavLink>
          <LinksNavLink to="#">Blog</LinksNavLink>
          <LinksNavLink to="#">À propos</LinksNavLink>
        </template>
      </NavsNav>
    </div>

    <TextesCode
      :code="`
<NavsNav>
    <template v-slot:logo>
        <TitresLogo>Logo</TitresLogo>
    </template>

    <template v-slot:links>
        <LinksNavLink to=&quot;#&quot;>Accueil</LinksNavLink>
        <LinksNavLink to=&quot;#&quot;>Blog</LinksNavLink>
        <LinksNavLink to=&quot;#&quot;>À propos</LinksNavLink>
    </template>
</NavsNav>
     `"
    />
  </Container>
</template>
