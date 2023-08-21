<template>
    <div class="flex flex-col p-8">
        <h1 class="mb-4 text-4xl font-bold text-orange-500">Random Meals</h1>
    </div>
    <Meals :meals="meals" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useMealByNameStore } from "/@/store/modules/storeMeals";
import Meals from '/@/components/Meals.vue'

const mealStore = useMealByNameStore();

const meals = ref<any>([])

onMounted(async () => {
    for (let i = 0; i < 12; i++) {
        mealStore.getRandomMeals().then((res) => {
            meals.value.push(res.data.meals[0])
        })
    }
})
</script>

<style lang="">
    
</style>