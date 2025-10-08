import { Component, EventEmitter, inject, input, Output, signal } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart';

@Component({
  selector: 'counter-component',
  imports: [],
  templateUrl: './counter.html',
  styles: ``
})
export class Counter {
  producto = input.required<any>(); // Recibe el producto completo
  cartService = inject(ShoppingCartService);

  get cantidad() {
    const id = this.producto().idMeal || this.producto().idDrink;
    const item = this.cartService.cartItems().find(i => (i.idMeal || i.idDrink) === id);
    return item?.cantidad || 0;
  }

  add(): void {
    this.cartService.addToCart(this.producto());
  }

  subtract(): void {
    this.cartService.removeOneFromCart(this.producto());
  }
}


