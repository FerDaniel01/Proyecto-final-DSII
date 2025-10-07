import { Component, input } from '@angular/core';


import { Meal } from '../../interfaces/giphy.interfaces';
import { MealListItem } from './meal-list-item/meal-list-item';

@Component({
  selector: 'meal-list',
  imports: [MealListItem],
  templateUrl: './meal-list.html',
  styles: ``
})
export class GifList {

  meals= input.required<Meal[]>();

}
