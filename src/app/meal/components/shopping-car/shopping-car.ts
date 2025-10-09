import { Component, inject } from '@angular/core';
import { SideMenuHeader } from '../side-menu/side-menu-header/side-menu-header';
import { SideMenuOptions } from '../side-menu/side-menu-options/side-menu-options';
import { ShoppingCartService } from '../../services/shopping-cart';
import { MealListItem } from '../meal-list/meal-list-item/meal-list-item';

@Component({
  selector: 'app-shoping-car',
  standalone: true,
  imports: [ MealListItem],
  templateUrl: './shopping-car.html',
  styles: ``
})
export class ShoppingCar {
  cartService = inject(ShoppingCartService);
}
