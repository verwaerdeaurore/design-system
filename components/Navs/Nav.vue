<!-- <template>
  <nav
    class="flex items-center uppercase justify-between flex-wrap bg-gray-800 h-20 px-4 border-b border-white"
  >
    <div class="italic hover:underline decoration-[#FFE601]">
      <nuxt-link to="/">
        <slot name="logo"> </slot>
      </nuxt-link>
    </div>
    <ul class="flex items-center justify-between space-x-8">
      <slot name="links"></slot>
    </ul>
  </nav>
</template> -->

<template>
  <nav
    class="flex items-center uppercase justify-between flex-wrap bg-gray-800 h-20 px-4 border-b border-white"
  >
    <div class="italic hover:underline decoration-[#FFE601]">
      <nuxt-link to="/">
        <slot name="logo"> </slot>
      </nuxt-link>
    </div>
    <!-- Burger Menu Button -->
    <button
      @click="toggleMobileMenu"
      class="lg:hidden text-white focus:outline-none"
    >
      <svg
        class="h-6 w-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 6h16M4 12h16m-7 6h7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <!-- Mobile Menu -->
    <ul
      v-if="isMobileMenuOpen"
      class="lg:hidden absolute top-20 left-0 right-0 bg-gray-800 z-20 flex flex-col items-center"
    >
      <slot name="links"></slot>
    </ul>
    <!-- Desktop Menu -->
    <ul v-else class="hidden lg:flex items-center justify-between space-x-8">
      <slot name="links"></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>
