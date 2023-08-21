<template>
    <div class="p-8 pb-0">
        <input v-model="keyword" type="text"
            class="w-full mb-3 bg-white border-2 border-gray-200 rounded focus:ring-orange-500 focus:border-orange-500"
            placeholder="Search for Meals" @change="searchMeals">
    </div>
    <Meals :meals="mealStore.searchedMeals" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMealByNameStore } from "/@/store/modules/storeMeals";
import { useRoute } from "vue-router";
import Meals from '/@/components/Meals.vue'

const route = useRoute()

const mealStore = useMealByNameStore()

const keyword = ref<string | string[]>("")

function searchMeals() {
    if (keyword.value) {
        mealStore.setMealByName(keyword.value)
    } else {
        // mealStore.setMealByName([])
        mealStore.searchedMeals = []
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        mealStore.setMealByName(keyword.value)
    }
})
</script>

<style lang="">

</style>
