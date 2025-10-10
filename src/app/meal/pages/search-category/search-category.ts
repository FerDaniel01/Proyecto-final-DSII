import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { MealByCategoryService } from '../../services/meal-by-category.services';
import { MealList } from '../../components/meal-list/meal-list';

@Component({
  selector: 'app-search-category',
  imports: [NgFor, MealList],
  templateUrl: './search-category.html',
  styles: ``
})
export default class SearchCategory {
  mealbyCategory = inject(MealByCategoryService);
  
  constructor() {
    this.mealbyCategory.loadCategories(''); 
  }
  
  onCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.mealbyCategory.loadMealsByCategory(value);
  }
  
}
