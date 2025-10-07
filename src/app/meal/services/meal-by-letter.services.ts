import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MealsResponse,Meal  } from '../interfaces/giphy.interfaces';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealByLetterService {
    private http= inject(HttpClient);
    searchedMeals=signal<Meal[]>([])
    // searchedTerm=signal<string>('') 

    constructor(){
  
  this.loadMealsByFirstLetter('a');
}

  loadMealsByFirstLetter(firstLetter: string) {
    
    this.http.get<MealsResponse>(`${environment.urlBase2}${firstLetter}`, {}).subscribe((response) => {
      console.log(response.meals??[]);
      this.searchedMeals.set(response.meals??[]);
    });

  }
    
      
   
  
}