export const codeListeLienIcone = `<ListsBasic>
  <li>
    <CardsIconLink to="/docs/composants">
      <template #icon>
        <i class="ri-list-indefinite"></i>
      </template>
      Composants
    </CardsIconLink>
  </li>

  <li>
    <CardsIconLink to="/docs/layouts">
      <template #icon>
        <i class="ri-layout-line"></i>
      </template>
      Layouts
    </CardsIconLink>
  </li>
  <li>
    <CardsIconLink to="/docs/icones">
      <template #icon>
        <i class="ri-heart-line"></i>
      </template>
      Icones
    </CardsIconLink>
  </li>
</ListsBasic>`;

export const codeGridIcones = `<ListsGrid>
  <li>
    <CardsIconCard to="/docs/composants">
      <template #icon>
        <i
          class="ri-list-indefinite text-green-500 group-hover:text-green-700"
        ></i>
      </template>
      Composants
    </CardsIconCard>
  </li>

  <li>
    <CardsIconCard to="/docs/layouts">
      <template #icon>
        <i
          class="ri-layout-line text-blue-500 group-hover:text-blue-700"
        ></i>
      </template>
      Layouts
    </CardsIconCard>
  </li>

  <li>
    <CardsIconCard to="/docs/icones">
      <template #icon>
        <i class="ri-heart-line text-red-500 group-hover:text-red-700"></i>
      </template>
      Icones
    </CardsIconCard>
  </li>
</ListsGrid>`;
