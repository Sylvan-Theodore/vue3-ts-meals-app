import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '/@/components/DefaultLayout.vue'
import GuestLayout from '/@/components/GuestLayout.vue'
import MealDetails from '/@/views/MealDetails.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import("/@/views/Home.vue")
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: () => import("/@/views/MealsByName.vue")
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: () => import("/@/views/MealsByLetter.vue")
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: () => import("/@/views/Ingredients.vue")
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: () => import("/@/views/MealsByIngredients.vue")
            },
            {
                path: '/meal/:id?',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes as []
})

export function setupRouter(app: App) {
    app.use(router)
}