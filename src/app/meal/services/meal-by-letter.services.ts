import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MealsResponse,Meal, DrinksResponse, Drink  } from '../interfaces/giphy.interfaces';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealByLetterService {
    private http= inject(HttpClient);
    searchedMeals=signal<Meal[]>([])
    // searchedTerm=signal<string>('') 
    searchedDrinks=signal<Drink[]>([])
    constructor(){
  
  this.loadMealsByFirstLetter('a');
}

  loadMealsByFirstLetter(firstLetter: string) {
    
    this.http.get<MealsResponse>(`${environment.urlBase2}${firstLetter}`, {}).subscribe((response) => {
      console.log(response.meals??[]);
      this.searchedMeals.set(response.meals??[]);
    });

  }
    
    loadDRinksByFirstLetter(firstLetter: string) {
    
    this.http.get<DrinksResponse>(`${environment.urlBase3}${firstLetter}`, {}).subscribe((response) => {
      console.log(response.drinks??[]);
      this.searchedDrinks.set(response.drinks??[]);
    });

  }
      
   
  
}