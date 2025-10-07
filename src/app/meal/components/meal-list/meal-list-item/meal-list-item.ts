import { Component, input } from '@angular/core';

@Component({
  selector: 'meal-list-item',
  imports: [],
  templateUrl: './meal-list-item.html',
  styles: ``
})
export class MealListItem {
imageUrl: any = input.required<string>();
idmeal: any = input.required<string>();
nameMeal: any = input.required<string>();
category: any = input.required<string>();

  // strMeal: string;
  //   strCategory: string;
  //   strMealThumb: string;

}
