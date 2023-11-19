<script setup>
definePageMeta({
  layout: "docs",
});

const navLink = `<LinksNavLink to="#">Accueil</LinksNavLink>`;
const link = `<LinksLink to="#">Un lien</LinksLink>`;
const external = `<LinksExternal to="#">Un lien externe</LinksExternal>`;
</script>

<template>
  <Container>
    <TitresH1>Liens</TitresH1>

    <TextesParagraphe>
      Vous pouvez utilisez les liens de navigation, internes et externes dans
      vos projets.
    </TextesParagraphe>

    <TitresH2>Liens de navigation</TitresH2>

    <LinksNavLink to="#">Accueil</LinksNavLink>

    <TextesCode :code="navLink" />

    <TitresH2>Liens internes</TitresH2>

    <LinksLink to="#">Un lien</LinksLink>

    <TextesCode :code="link" />

    <TitresH2>Liens externes</TitresH2>

    <LinksExternal to="#">Un lien externe</LinksExternal>

    <TextesCode :code="external" />
  </Container>
</template>
