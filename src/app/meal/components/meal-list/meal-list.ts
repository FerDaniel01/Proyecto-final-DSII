import { Component, input } from '@angular/core';


import { Meal, MealProduct } from '../../interfaces/interfaces';
import { MealListItem } from './meal-list-item/meal-list-item';

@Component({
  selector: 'meal-list',
  imports: [MealListItem],
  templateUrl: './meal-list.html',
  styles: ``
})
export class MealList {

  meals= input.required<MealProduct[]>();

}
