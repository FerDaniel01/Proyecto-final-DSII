import { inject, Injectable, signal } from '@angular/core';
import { Meal, MealProduct, MealsResponse } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { MealOrDrinkMapper } from '../mapper/meal.mapper';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealByNameServices {
  private http= inject(HttpClient);
  //searchedMeals=signal<Meal[]>([])
    searchedMeals=signal<MealProduct[]>([])

  constructor(){}

  loadMealsByName(name: string) {
    this.http.get<MealsResponse>(`${environment.urlBase3}${name}`, {}).subscribe((response) => {
    const meals = MealOrDrinkMapper.mapMealsToMealProducts(response.meals)
          console.log(meals);
          this.searchedMeals.set(meals);
    });
  }
  
  // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
}
