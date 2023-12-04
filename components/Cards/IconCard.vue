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
    class="flex flex-col p-4 group  transition items-center justify-center ring-2 ring-gray-200/75 my-8 space-y-2"
  >
    <div class="text-5xl text-white  group-hover:text-white transition">
      <slot name="icon" />
    </div>

    <div
      class="text-xl text-white group-hover:text-white group-hover:underline decoration-[#079DD9] transition"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
