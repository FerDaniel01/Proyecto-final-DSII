import { inject, Injectable, signal } from '@angular/core';
import { Meal, MealsResponse } from '../interfaces/giphy.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealByNameServices {
  private http= inject(HttpClient);
  searchedMeals=signal<Meal[]>([])

  constructor(){}

  loadMealsByName(name: string) {
    this.http.get<MealsResponse>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`, {}).subscribe((response) => {
      console.log(response.meals??[]);
      this.searchedMeals.set(response.meals??[]);
    });
  }
  
  // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
}
