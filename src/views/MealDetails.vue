<template>
    <div class="max-w-[800px] p-8 mx-auto ">
        <h1 class="mb-5 text-4xl font-bold text-orange-500">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
        <div class="grid grid-cols-1 py-2 text-lg sm:grid-cols-3">
            <div>
                <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div class="my-3">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="mb-2 text-2xl font-semibold">Ingredients</h2>
                <ul>
                    <template v-for="(el, index) in  new Array(20) ">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="mb-2 text-2xl font-semibold">Measure1</h2>
                <ul>
                    <template v-for="(el, index) in  new Array(20) ">
                        <li v-if="meal[`strMeasure${index + 1}`]">
                            {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                <a :href="meal.strYoutube" target="_blank"
                    class="px-3 py-2 ml-3 text-gray-700 text-indigo-600 transition-colors border-2 border-transparent rounded">
                    View Original Source
                </a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { MealDetailsById } from '/@/api/MealList/MealList'
import YouTubeButton from '/@/components/YouTubeButton.vue'

const route = useRoute()

const meal = ref({})

onMounted(() => {
    MealDetailsById(route.params.id).then((res) => {
        console.log(res);
        meal.value = res.data.meals[0] || {}
    })
})
</script>
<style lang="">
    
</style>