<template>
  <header class="flex items-stretch justify-between h-16 bg-white shadow">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 font-bold text-orange-500">
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{ name: 'byName' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-orange-500 hover:text-white">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-orange-500 hover:text-white">
        Meals By letter
      </router-link>
      <router-link :to="{ name: 'ingredients' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-orange-500 hover:text-white">
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
<script setup lang="ts">

</script>
<style lang="">
    
</style>