<template>
    <div class="p-8 pb-0">
        <h1 class="mb-4 text-4xl font-bold text-orange-500">Meals for {{ route.params.ingredient }}</h1>
    </div>
    <Meals :meals="mealStore.mealsByIngredients" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMealByNameStore } from "/@/store/modules/storeMeals";
import { useRoute } from 'vue-router';
import Meals from '/@/components/Meals.vue'


const mealStore = useMealByNameStore()

console.log(mealStore.mealsByIngredients);


const route = useRoute()

onMounted(() => {
    mealStore.setMealsByIngredients(route.params.ingredient)
})
</script>

<style lang="">

</style>
