<script setup>
definePageMeta({
  layout: "docs",
});

const consoleLog = `console.log('hello')`;
const code = `<TextesCode code="${consoleLog}" language="js" />`;
</script>

<template>
  <Container>
    <TitresH1>Textes</TitresH1>

    <TextesParagraphe>
      Utilisez les composants de texte pour afficher des paragraphes ou des
      blocks de code, etc.
    </TextesParagraphe>

    <TitresH2>Citations</TitresH2>

    <TextesCitation>
      « Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem. »
    </TextesCitation>
    <TextesCode
      :code="`<TextesCitation>
    « Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptates quia quae voluptatem.»
</TextesCitation>`"
    />
    <TitresH2>Paragraphe</TitresH2>
    <TextesParagraphe>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas
      voluptatibus quidem doloribus. Quisquam voluptatum, quibusdam, voluptates
      quia quae voluptatem, quos quod quas voluptatibus quidem doloribus.
    </TextesParagraphe>
    <TextesCode
      :code="`<TextesParagraphe>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas voluptatibus quidem doloribus. Quisquam voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas voluptatibus quidem doloribus.
</TextesParagraphe>`"
    />
    <TitresH3>Bold</TitresH3>

    <TextesBold>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem.
    </TextesBold>
    <TextesCode
      :code="`<TextesBold>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem.</TextesBold>`"
    />
    <TitresH3>Italic</TitresH3>

    <TextesItalic>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem.
    </TextesItalic>
    <TextesCode
      :code="`<TextesItalic>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem.</TextesItalic>`"
    />
    <TitresH3>Underline</TitresH3>
    <TextesUnderline>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem.
    </TextesUnderline>
    <TextesCode
      :code="`<TextesUnderline>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem.</TextesUnderline>`"
    />

    <TitresH2>Code</TitresH2>

    <TextesParagraphe> Language par défaut : vue </TextesParagraphe>

    <TextesCode :code="consoleLog" language="js" />

    <TextesCode :code="code" />
  </Container>
</template>
