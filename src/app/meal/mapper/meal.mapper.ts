
import { MealProduct, Meal } from "../interfaces/giphy.interfaces";
//import { GiphyItem } from "../interfaces/giphy.interfaces";

export class MealMapper {
    static mapMealToMealProduct(item: Meal): MealProduct{
        return{
    id: item.idMeal,
    name: item.strMeal,
    imageUrl: item.strMealThumb,
    category: item.strCategory,
    price: (Number(item.idMeal)-50000) // Precio fijo o puedes implementar una lógica para asignar precios
}
} 
// static mapGiphyItemsToGifArray(items: GiphyItem[] ): Gif[] {
// return items.map(this.mapGiphyItemToGif);
// }

static mapMealsToMealProducts(meals: Meal[]): MealProduct[] {
    return meals.map(this.mapMealToMealProduct);
  }
}
