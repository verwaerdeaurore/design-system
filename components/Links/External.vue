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
    target="_blank"
    class="group inline-flex space-x-1.5 items-baseline"
  >
    <span class=" text-[#079DD9] italic group-hover:text-[#079DD9] transition">
      <slot />
    </span>
    <span>
      <i
        class="ri-external-link-line text-[#079DD9] group-hover:text-[#079DD9] transition"
      ></i>
    </span>
  </NuxtLink>
</template>
