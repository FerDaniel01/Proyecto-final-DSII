import { Component, computed, effect, inject } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Meal, MealProduct } from '../../interfaces/giphy.interfaces';
import { MealByLetterService } from '../../services/meal-by-letter.services';

import {  MealList } from "../../components/meal-list/meal-list";
import { MealByNameServices } from '../../services/meal-by-name.services';
import { MealMapper } from '../../mapper/meal.mapper';
import { DrinkByLetterServices } from '../../services/drink-by-letter.services';

@Component({
  selector: 'app-search-drink',
  imports: [CommonModule, ReactiveFormsModule,  MealList],
  templateUrl: './search-drink.html',
  styles: ``
})
export default class SearchDrink {

  meals: MealProduct[] = [];
  drinkByLetterService = inject(DrinkByLetterServices)
  mealByLetterService = inject(MealByLetterService)
  mealByNameService = inject(MealByNameServices)
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    constructor() {
    
    // Efecto para actualizar meals cuando cambie el signal
    effect(() => {
    this.meals = this.drinkByLetterService.searchedMeals() as MealProduct[];
    });
    //   effect(() => {
    // this.meals = this.mealByNameService.searchedMeals() ;
    // });
  }
}



