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
    class="text-lg text-gray-300 hover:text-gray-100 hover:underline transition"
    active-class="font-bold"
    exact
  >
    <slot />
  </NuxtLink>
</template>
