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
export interface MealsResponse {
    meals: Meal[]
} 
export interface Meal {
     strMeal: string;
    strCategory: string;
    strMealThumb: string;
    
}