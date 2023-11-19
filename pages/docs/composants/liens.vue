<script setup>
definePageMeta({
  layout: "docs",
});
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

    <TextesCode
      :code="`<LinksNavLink to=&quot;#&quot;>Accueil</LinksNavLink>`"
    />

    <TitresH2>Liens internes</TitresH2>

    <LinksLink to="#">Un lien</LinksLink>

    <TextesCode :code="`<LinksLink to=&quot;#&quot;>Un lien</LinksLink>`" />

    <TitresH2>Liens externes</TitresH2>

    <LinksExternal to="#">Un lien externe</LinksExternal>

    <TextesCode
      :code="`<LinksExternal to=&quot;#&quot;>Un lien</LinksExternal>`"
    />
  </Container>
</template>
