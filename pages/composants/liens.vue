<template>
  <Container>
    <TitresTitre1>Liens</TitresTitre1>

    <TitresTitre2>Liens de navigation</TitresTitre2>

    <LinksNavLink to="#">Accueil</LinksNavLink>

    <TextesCode
      :code="`
 <LinksNavLink to=&quot;#&quot;>Accueil</LinksNavLink>
     `"
    />

    <TitresTitre2>Liens internes</TitresTitre2>

    <LinksLink to="#">Un lien</LinksLink>

    <TextesCode
      :code="`
<LinksLink to=&quot;#&quot;>Un lien</LinksLink>
     `"
    />

    <TitresTitre2>Liens externes</TitresTitre2>

    <LinksExternal to="#">Un lien externe</LinksExternal>

    <TextesCode
      :code="`
<LinksExternal to=&quot;#&quot;>Un lien</LinksExternal>
     `"
    />
  </Container>
</template>
