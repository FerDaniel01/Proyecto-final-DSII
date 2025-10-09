export interface GiphyResponse { 
    data: GiphyItem[]
}

export interface GiphyItem {
    id: string;
    title:string; 
    images: GiphyItemImage
}

export interface GiphyItemImage {
    original: GiphyItemImageOriginal
}

export interface GiphyItemImageOriginal {
    url: string
}
export interface MealsResponse {// comidas que responde la api
    meals: Meal[]
} 
export interface Meal {// comida individual que responde la api
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    
}

export interface CategoryResponse{
    meals: CategoryMeal[] 
}

export interface CategoryMeal{
    strCategory: string;
}


export interface DrinksResponse {
    drinks: Drink[]
} 
export interface Drink {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
    
}

export interface MealProduct {
    id: string;
    name: string;
    category: string;
    price: number;
    imageUrl: string;
}