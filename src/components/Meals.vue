<template>
    <div class="grid grid-cols-1 gap-5 px-8 md:grid-cols-3">
        <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="flex justify-center p-8 text-gray-600">
        There are on meals
    </div>
</template>
<script setup lang="ts">
import MealItem from '/@/components/MealItem.vue'

const { meals } = defineProps({
    meals: {
        require: true,
        type: Object
    }
})
</script>
<style lang="">
    
</style>