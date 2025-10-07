import { Component, computed, effect, inject } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Meal } from '../../interfaces/giphy.interfaces';
import { MealByLetterService } from '../../services/meal-by-letter.services';

@Component({
  selector: 'app-search-meal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-meal.html',
  styles: ``
})
export default class SearchMeal  {

  meals: Meal[] = [];
  mealByLetterService = inject(MealByLetterService)
 
    constructor() {
    // Efecto para actualizar meals cuando cambie el signal
    effect(() => {
      this.meals = this.mealByLetterService.searchedMeals();
    });
  }
}
