import { Component, computed, effect, inject } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Meal, MealProduct } from '../../interfaces/interfaces';
import { MealByLetterService } from '../../services/meal-by-letter.services';

import {  MealList } from "../../components/meal-list/meal-list";
import { MealByNameServices } from '../../services/meal-by-name.services';


@Component({
  selector: 'app-search-meal',
  imports: [CommonModule, ReactiveFormsModule,  MealList],
  templateUrl: './search-meal.html',
  styles: ``
})
export default class SearchMeal  {

  meals: MealProduct[] = [];
  mealByLetterService = inject(MealByLetterService)
  mealByNameService = inject(MealByNameServices)
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    constructor() {
    
    
    effect(() => {
    this.meals = this.mealByLetterService.searchedMeals() as MealProduct[];
    });
      effect(() => {
    this.meals = this.mealByNameService.searchedMeals() ;
    });
  }
}
