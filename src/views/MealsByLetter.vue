<template>
    <div class="p-8 pb-0">
        <h1 class="mb-4 text-4xl font-bold text-orange-500">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
        <router-link class="flex items-center justify-center w-2 h-2 transition-all hover:text-orange-500 hover:scale-150"
            :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <Meals :meals="mealStore.mealsByLetter" />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useMealByNameStore } from "/@/store/modules/storeMeals";
import Meals from '/@/components/Meals.vue'

const mealStore = useMealByNameStore()

const route = useRoute()

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWYXZ'.split("");

watch(route, () => {
    mealStore.setMealsByLetter(route.params.letter)
})

onMounted(() => {
    mealStore.setMealsByLetter(route.params.letter)
})
</script>

<style lang="">

</style>
