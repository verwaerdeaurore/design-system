<template>
  <NavsNav>
    <template v-slot:logo>
      <TitresLogo>Design System</TitresLogo>
    </template>

    <template v-slot:links>
      <LinksNavLink to="/">Accueil</LinksNavLink>
      <LinksNavLink to="/dispositions">Dispositions</LinksNavLink>
      <LinksNavLink to="/composants">Composants</LinksNavLink>
      <LinksNavLink to="/icones">Icones</LinksNavLink>
    </template>
  </NavsNav>
</template>
