<template>
    <div class="transition-all bg-white shadow rounded-xl hover:scale-105">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover w-full h-48 rounded-t-xl">
        </router-link>
        <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p class="mb-4">{{ truncateWords(meal.strInstructions, 20) }} </p>
            <div class="flex items-center justify-between">
                <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                <!-- <router-link to="/" class="px-3 py-2 text-white transition-colors bg-purple-500 border-2 border-purple-600 rounded hover:bg-purple-600"> Views</router-link> -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import YouTubeButton from '/@/components/YouTubeButton.vue';
import { truncateWords } from "/@/utils/filters/filters";
const { meal } = defineProps({
    meal: Object
})

</script>
<style lang="">
    
</style>