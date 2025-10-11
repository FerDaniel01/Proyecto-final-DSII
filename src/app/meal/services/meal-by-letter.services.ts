import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MealsResponse,Meal, DrinksResponse, Drink, MealProduct  } from '../interfaces/interfaces';
import { environment } from '@environments/environment';
import { MealOrDrinkMapper } from '../mapper/meal.mapper';

@Injectable({
  providedIn: 'root'
})
export class MealByLetterService {
    private http= inject(HttpClient);
    searchedMeals=signal<MealProduct[]>([])
    // searchedTerm=signal<string>('') 
    searchedDrinks=signal<Drink[]>([])
    constructor(){
  
  this.loadMealsByFirstLetter('a');
}

  loadMealsByFirstLetter(firstLetter: string) {
    console.log('La letra es   ',firstLetter);
    this.http.get<MealsResponse>(`${environment.urlBase2}${firstLetter}`, {}).subscribe((response) => {
      const meals = MealOrDrinkMapper.mapMealsToMealProducts(response.meals)
      console.log(meals);
      this.searchedMeals.set(meals);
    });

  }
    
    loadDRinksByFirstLetter(firstLetter: string) {
      console.log('La letra es   ',firstLetter);
    this.http.get<DrinksResponse>(`${environment.urlBase4}${firstLetter}`, {}).subscribe((response) => {

      console.log(response.drinks??[]);
      this.searchedDrinks.set(response.drinks??[]);
    });

  }
      
   
  
}