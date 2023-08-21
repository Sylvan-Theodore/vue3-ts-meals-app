import { defineStore } from "pinia";
import { RandomMeals } from "/@/api/MealList/MealList";
import { MealList } from "/@/api/MealList/MealList";
import { MealByName } from '/@/api/MealList/MealList'
import { MealsByLetter } from "/@/api/MealList/MealList";
import { MealsByIngredient } from "/@/api/MealList/MealList";


interface Meals {
    RandomMeals: [],
    mealList: [],
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
}

export const useMealByNameStore = defineStore({
    id: 'mealByNameStore',
    state: (): Meals => ({
        RandomMeals: [],
        mealList: [],
        searchedMeals: [],
        mealsByLetter: [],
        mealsByIngredients: [],
    }),
    getters: {},
    actions: {
        async getRandomMeals() {
            return new Promise<any>((resolve, reject) => {
                RandomMeals().then((res) => {
                    resolve(res)
                    console.log(res);
                    this.RandomMeals = res.data.meals
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        async getMealList() {
            return new Promise<any>((resolve, reject) => {
                MealList().then((res) => {
                    resolve(res)
                    this.mealList = res.data.meals
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        async setMealByName(params: string | string[]) {
            return new Promise<any>((resolve, reject) => {
                MealByName(params).then((res) => {
                    resolve(res)
                    this.searchedMeals = res.data.meals
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        async setMealsByLetter(params: string | string[]) {
            return new Promise<any>((resolve, reject) => {
                MealsByLetter(params).then((res) => {
                    resolve(res)
                    this.mealsByLetter = res.data.meals
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        async setMealsByIngredients(params: string | string[]) {
            return new Promise<any>((resolve, reject) => {
                MealsByIngredient(params).then((res) => {
                    resolve(res)
                    this.mealsByIngredients = res.data.meals
                }).catch((error) => {
                    reject(error)
                })
            })
        }
    }
})