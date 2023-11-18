<template>
  <NavsNav>
    <template v-slot:logo>
      <TitresLogo>Design System</TitresLogo>
    </template>

    <template v-slot:links>
      <LinksNavLink to="/">Accueil</LinksNavLink>
      <LinksNavLink to="/layouts">Layouts</LinksNavLink>
      <LinksNavLink to="/components">Components</LinksNavLink>
      <LinksNavLink to="/icones">Icones</LinksNavLink>
    </template>
  </NavsNav>
</template>
