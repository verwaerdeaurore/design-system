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
    class="flex items-baseline space-x-8 p-4 group hover:bg-gray-200/75 transition"
  >
    <div class="text-2xl text-gray-400 group-hover:text-gray-800 transition">
      <slot name="icon" />
    </div>

    <div
      class="text-lg text-gray-100 group-hover:text-black group-hover:underline transition"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
