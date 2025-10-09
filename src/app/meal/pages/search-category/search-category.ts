import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { MealByCategoryService } from '../../services/meal-by-category.services';


@Component({
  selector: 'app-search-category',
  imports: [NgFor],
  templateUrl: './search-category.html',
  styles: ``
})
export default class SearchCategory {
  mealbyCategory = inject(MealByCategoryService);
  
  constructor() {
    this.mealbyCategory.loadcategories(); // Llama aquí al método del servicio
  }
  
}
