import { Component, effect, inject, input, signal } from '@angular/core';
import { count } from 'rxjs';
import { Meal } from 'src/app/meal/interfaces/giphy.interfaces';
import { Counter } from '../../counter/counter';
import { ShoppingCartService } from 'src/app/meal/services/shopping-cart';


@Component({
  selector: 'meal-list-item',
  imports: [Counter],
  templateUrl: './meal-list-item.html',
  styles: ``
})
export class MealListItem {
  producto = input.required<any>();
 
  cartService = inject(ShoppingCartService);
  agregarProducto(producto: any) {
    this.cartService.addToCart(producto);
    console.log('Productos en el carrito:', this.cartService.cartItems());
  }
}
