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
    class="flex flex-col p-4 group hover:bg-gray-200/75 transition items-center justify-center ring-2 ring-gray-200/75 my-8 space-y-2"
  >
    <div class="text-5xl text-gray-400 group-hover:text-gray-800 transition">
      <slot name="icon" />
    </div>

    <div
      class="text-xl text-gray-100 group-hover:text-gray-900 group-hover:underline transition"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
