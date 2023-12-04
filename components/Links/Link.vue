<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="text-[#6DBF1B] hover:text-[#6DBF1B] hover:underline  decoration-[#6DBF1B] transition"
  >
    <slot />
  </NuxtLink>
</template>
