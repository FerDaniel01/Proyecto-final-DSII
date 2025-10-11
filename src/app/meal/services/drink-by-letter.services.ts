import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { DrinksResponse, MealProduct } from '../interfaces/interfaces';
import { environment } from '@environments/environment';
import { MealOrDrinkMapper } from '../mapper/drink.mapper';

@Injectable({
  providedIn: 'root'
})
export class DrinkByLetterServices {
  
      private http= inject(HttpClient);
    searchedMeals=signal<MealProduct[]>([])
    constructor(){
      
      this.loadDRinksByFirstLetter('a');
    }
    
        loadDRinksByFirstLetter(firstLetter: string) {
          console.log('La letra es   ',firstLetter);
        this.http.get<DrinksResponse>(`${environment.urlBase4}${firstLetter}`, {}).subscribe((response) => {
    
          const meals = MealOrDrinkMapper.mapMealsToMealProducts(response.drinks)
              console.log(meals);
              this.searchedMeals.set(meals);
        });
    
      }
}
