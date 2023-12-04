<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="uppercase font-sans text-lg text-gray-300 hover:text-gray-100 hover:underline transition decoration-[#D90416]"
    active-class="uppercase"
  >
    <slot />
  </NuxtLink>
</template>
