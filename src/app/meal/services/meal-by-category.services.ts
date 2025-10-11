import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MealCategoryMapper, MealOrDrinkMapper } from "../mapper/meal.mapper";
import { Meal, CategoryMeal, CategoryResponse, MealCategory, MealProduct, MealsResponse } from "../interfaces/interfaces";
import { environment } from "@environments/environment";


@Injectable({
  providedIn: 'root'
})

export class MealByCategoryService {
  
  //peticion HTTP para obtener las categorias
  private http= inject(HttpClient);
  categories=signal<MealCategory[]>([])
  mealsByCategory = signal<MealProduct[]>([]);
  loadedCategory = signal<string>('');
  // metodo para cargar las categorias
  loadCategories(category: string) {
    
    this.http.get<CategoryResponse>(`${environment.urlBase5}${category}`, {}).subscribe((response) => {
      const categoriesmeals = MealCategoryMapper.mapCategoryMealsToMealCategories(response.meals);
      this.categories.set(categoriesmeals);

      
    });
  }

  // método para cargar platos por categoría
  // loadMealsByCategory(category: string) {
  //   this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, {}).subscribe((response) => {
  //     console.log('Categoría solicitada:', category);
  //     console.log('Respuesta de la API:', response.meals);
  //     this.mealsByCategory.set(response.meals);
  //     const meals = response.meals ? response.meals.map((meal: any) => ({
  //       id: meal.idMeal,
  //       name: meal.strMeal,
  //       imageUrl: meal.strMealThumb,
  //       category: category,
  //       price: Math.round(Number(meal.idMeal.slice(-2))) * 1000
  //     })) : [];
  //     this.mealsByCategory.set(meals);
  //     console.log(meals);
  //   });
  // }
  

  loadMealsByCategory(category: string) {
    console.log('Cargando platos para la categoría:', category);
      this.http.get<MealsResponse>(`${environment.urlBase6}${category}`, {}).subscribe((response) => {
      const meals = MealOrDrinkMapper.mapMealsToMealProducts(response.meals)
            console.log('platos por categorias',meals);
            this.mealsByCategory.set(meals);
            this.loadedCategory.set(category);
      });
    }


}




