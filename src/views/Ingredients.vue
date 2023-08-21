<template>
    <div class="p-8 pb-0">
        <h1 class="mb-4 text-4xl font-bold text-orange-500">Ingredients</h1>
    </div>
    <div class="px-8">
        <input v-model="keyword" type="text" class="w-full mb-3 bg-white border-2 border-gray-200 rounded focus:ring-orange-500 focus:border-orange-500"
            placeholder="Search for Ingredients" @change="searchMeals">
        <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
            <!-- <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredients.strIngredient } }"
                v-for="ingredients in computedIngredients" :key="ingredients.idIngredient"
                class="p-3 mb-3 mr-3 bg-white rounded shadow">
                <h3 class="mb-2 text-2xl font-bold">{{ ingredients.strIngredient }}</h3>
                 <p>{{ ingredients.strDescription }}</p> -->
            <!-- </router-link> -->
            <a href="#" class="block p-3 mb-3 bg-white rounded shadow" @click="openIngredisents(ingredients)"
                v-for="ingredients in computedIngredients" :key="ingredients.idIngredient">
                <h3 class="mb-2 text-2xl font-bold">{{ ingredients.strIngredient }}</h3>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useMealByNameStore } from "/@/store/modules/storeMeals";
import { useRouter } from 'vue-router';

const mealStore = useMealByNameStore()

const router = useRouter()

const keyword = ref<string | string[]>("")

const computedIngredients = computed(() => {
    if (!computedIngredients) return mealStore.mealList
    return mealStore.mealList.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

const openIngredisents = (ingredisents: string | string[]) => {
    router.push({
        name: 'byIngredient',
        params: {
            ingredient: ingredisents.strIngredient
        }
    })
}

onMounted(() => {
    mealStore.getMealList()
})
</script>

<style lang="">

</style>
