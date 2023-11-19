<script setup>
definePageMeta({
  layout: "docs",
});

const nom = ref("");
const prenom = ref("");
const description = ref("");
</script>

<template>
  <Container>
    <TitresH1>Inputs</TitresH1>

    <TextesParagraphe>
      Vous pouvez utilisez les inputs de formulaire dans vos projets.
    </TextesParagraphe>

    <TitresH2>Input de texte</TitresH2>

    <InputsGroup class="max-w-xs">
      <InputsLabel name="nom">Nom</InputsLabel>
      <InputsTexte v-model="nom" name="nom" placeholder="Votre nom" />
    </InputsGroup>

    <div>Valeur du champs: {{ nom }}</div>

    <TextesCode
      :code="`<InputsGroup class=&quot;max-w-xs&quot;>
    <InputsLabel name=&quot;nom&quot;>Nom</InputsLabel>
    <InputsTexte name=&quot;nom&quot; placeholder=&quot;Votre nom&quot; />
</InputsGroup>`"
    />

    <TitresH2>Input de texte avec erreur</TitresH2>

    <InputsGroup class="max-w-xs">
      <InputsLabel name="nom">Nom*</InputsLabel>
      <InputsTexte v-model="nom" name="nom" placeholder="Votre nom" />
      <InputsErreur>Le champs nom est requis</InputsErreur>
    </InputsGroup>

    <TextesCode
      :code="`<InputsGroup class=&quot;max-w-xs&quot;>
    <InputsLabel name=&quot;nom&quot;>Nom</InputsLabel>
    <InputsTexte name=&quot;nom&quot; placeholder=&quot;Votre nom&quot />
    <InputsErreur>Le champs nom est requis</InputsErreur>
</InputsGroup>`"
    />

    <TitresH2>Textarea</TitresH2>

    <InputsGroup class="max-w-xs">
      <InputsLabel name="description">Description</InputsLabel>
      <InputsTextarea
        v-model="description"
        name="description"
        placeholder="Votre texte ..."
        rows="10"
      />
    </InputsGroup>
    <div>Valeur du champs: {{ description }}</div>

    <TextesCode
      :code="`<InputsGroup class=&quot;max-w-xs&quot;>
    <InputsLabel name=&quot;description&quot;>Description</InputsLabel>
    <InputsTextarea name=&quot;description&quot; placeholder=&quot;Votre texte ...&quot; rows=&quot;10&quot; />
</InputsGroup>`"
    />

    <TitresH2>Form</TitresH2>

    <InputsForm>
      <InputsGroup class="max-w-xs">
        <InputsLabel name="nom">Nom</InputsLabel>
        <InputsTexte v-model="nom" name="nom" placeholder="Votre nom" />
      </InputsGroup>

      <InputsGroup class="max-w-xs">
        <InputsLabel name="prenom">Prénom</InputsLabel>
        <InputsTexte
          v-model="prenom"
          name="prenom"
          placeholder="Votre prénom"
        />
      </InputsGroup>

      <InputsGroup class="max-w-xs">
        <InputsLabel name="description">Description</InputsLabel>
        <InputsTextarea
          v-model="description"
          name="description"
          placeholder="Votre texte ..."
          rows="10"
        />
      </InputsGroup>
    </InputsForm>
  </Container>
</template>
