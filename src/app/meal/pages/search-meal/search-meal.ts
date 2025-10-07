import { Component, computed, effect, inject } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Meal } from '../../interfaces/giphy.interfaces';
import { MealByLetterService } from '../../services/meal-by-letter.services';

import { GifList } from "../../components/meal-list/meal-list";
import { MealByNameServices } from '../../services/meal-by-name.services';

@Component({
  selector: 'app-search-meal',
  imports: [CommonModule, ReactiveFormsModule,  GifList],
  templateUrl: './search-meal.html',
  styles: ``
})
export default class SearchMeal  {

  meals: Meal[] = [];
  mealByLetterService = inject(MealByLetterService)
  mealByNameService = inject(MealByNameServices)
 
    constructor() {
    // Efecto para actualizar meals cuando cambie el signal
    effect(() => {
      this.meals = this.mealByLetterService.searchedMeals();
    });
      effect(() => {
      this.meals = this.mealByNameService.searchedMeals();
    });
  }
}
