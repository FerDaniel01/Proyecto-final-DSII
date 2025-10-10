import { MealProduct, Meal, CategoryMeal, MealCategory } from "../interfaces/giphy.interfaces";
//import { GiphyItem } from "../interfaces/giphy.interfaces";

export class MealMapper {
    static mapMealToMealProduct(item: Meal): MealProduct{
        return{
    id: item.idMeal,
    name: item.strMeal,
    imageUrl: item.strMealThumb,
    category: item.strCategory,
    price: Math.round(Number(item.idMeal.slice(-2))) *1000// Precio fijo o puedes implementar una lógica para asignar precios
    
    

}
} 
static mapMealsToMealProducts(meals: Meal[]): MealProduct[] {
    return meals.map(this.mapMealToMealProduct);
  }
}

export class MealCategoryMapper {
    static mapCategoryMealToMealCategory(item: CategoryMeal): MealCategory {
        return {
            category: item.strCategory
        };
    }

    static mapCategoryMealsToMealCategories(meals: CategoryMeal[]): MealCategory[] {
        return meals.map(this.mapCategoryMealToMealCategory);
    }
}
// static mapGiphyItemsToGifArray(items: GiphyItem[] ): Gif[] {
// return items.map(this.mapGiphyItemToGif);
// }
// cadena.slice(-2)


