<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-black h-20 px-4 border-b border-white"
  >
    <div>
      <nuxt-link to="/">
        <slot name="logo"> </slot>
      </nuxt-link>
    </div>
    <ul class="flex items-center justify-between space-x-8">
      <slot name="links"></slot>
    </ul>
  </nav>
</template>
