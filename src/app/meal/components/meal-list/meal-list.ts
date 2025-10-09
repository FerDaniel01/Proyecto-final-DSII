import { Component, input } from '@angular/core';


import { Meal, MealProduct } from '../../interfaces/giphy.interfaces';
import { MealListItem } from './meal-list-item/meal-list-item';
import { MealMapper } from '../../mapper/meal.mapper';

@Component({
  selector: 'meal-list',
  imports: [MealListItem],
  templateUrl: './meal-list.html',
  styles: ``
})
export class GifList {

  meals= input.required<MealProduct[]>();

}
