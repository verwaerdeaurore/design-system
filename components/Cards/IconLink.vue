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
    class="flex items-baseline space-x-8 p-4 group  transition"
  >
    <div class="text-2xl text-white group-hover:text-white transition">
      <slot name="icon" />
    </div>

    <div
      class="text-lg text-white group-hover:text-white group-hover:underline decoration-[#6DBF1B] transition"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
