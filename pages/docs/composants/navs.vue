<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1>Navigations</TitresH1>

    <TitresH2>Barre de navigation</TitresH2>

    <div class="ring-2 ring-gray-200/75 my-8">
      <NavsNav>
        <template #logo>
          <TitresLogo>Logo</TitresLogo>
        </template>

        <template #links>
          <LinksNavLink to="#">Accueil</LinksNavLink>
          <LinksNavLink to="#">Blog</LinksNavLink>
          <LinksNavLink to="#">À propos</LinksNavLink>
        </template>
      </NavsNav>
    </div>

    <TextesCode
      :code="`<NavsNav>
    <template #logo>
        <TitresLogo>Logo</TitresLogo>
    </template>

    <template #links>
        <LinksNavLink to=&quot;#&quot;>Accueil</LinksNavLink>
        <LinksNavLink to=&quot;#&quot;>Blog</LinksNavLink>
        <LinksNavLink to=&quot;#&quot;>À propos</LinksNavLink>
    </template>
</NavsNav>`"
    />
  </Container>
</template>
