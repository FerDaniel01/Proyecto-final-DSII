import { Component, effect, inject, input, signal } from '@angular/core';
import { count } from 'rxjs';
import { Meal } from 'src/app/meal/interfaces/interfaces';
import { Counter } from '../../counter/counter';
import { ShoppingCartService } from 'src/app/meal/services/shopping-cart';
import { MealByCategoryService } from 'src/app/meal/services/meal-by-category.services';


@Component({
  selector: 'meal-list-item',
  imports: [Counter],
  templateUrl: './meal-list-item.html',
  styles: ``
})
export class MealListItem {
  producto = input.required<any>();
 
  cartService = inject(ShoppingCartService);
  loadedCategory = inject(MealByCategoryService).loadedCategory;
  agregarProducto(producto: any) {
    this.cartService.addToCart(producto);
    console.log('Productos en el carrito:', this.cartService.cartItems());
  }
}
