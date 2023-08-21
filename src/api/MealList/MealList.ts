import request from "/@/utils/request/request";

export function RandomMeals() {
    return request({
        url: '/random.php',
        method: 'GET',
    })
}

export function MealList() {
    return request({
        url: '/list.php?i=list',
        method: 'GET',
    })
}

export function MealByName(params: string | string[]) {
    return request({
        url: `/search.php?s=${params}`,
        method: 'GET',
    })
}

export function MealDetailsById(params: string) {
    return request({
        url: `/lookup.php?i=${params}`,
        method: 'GET',
    })
}

export function MealsByLetter(params: string | string[]) {
    return request({
        url: `/search.php?f=${params}`,
        method: 'GET',
    })
}

export function MealsByIngredient(params: string | string[]) {
    return request({
        url: `/filter.php?i=${params}`,
        method: 'GET',
    })
}