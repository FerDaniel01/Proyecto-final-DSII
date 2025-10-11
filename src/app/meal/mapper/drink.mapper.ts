
import { MealProduct, Meal, Drink } from "../interfaces/interfaces";
//import { GiphyItem } from "../interfaces/giphy.interfaces";

export class MealOrDrinkMapper {
    static mapMealToMealProduct(item: Drink): MealProduct{
        return{
    id: item.idDrink,
    name: item.strDrink,
    imageUrl: item.strDrinkThumb,
    category: item.strCategory,
    price: Math.round(Number(item.idDrink.slice(-2))) *1000// Precio fijo o puedes implementar una lógica para asignar precios
}
} 
// static mapGiphyItemsToGifArray(items: GiphyItem[] ): Gif[] {
// return items.map(this.mapGiphyItemToGif);
// }
// cadena.slice(-2)

static mapMealsToMealProducts(meals: Drink[]): MealProduct[] {
    return meals.map(this.mapMealToMealProduct);
  }
}
