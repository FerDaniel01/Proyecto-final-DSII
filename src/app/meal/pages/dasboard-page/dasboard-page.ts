import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeader } from '../../components/side-menu/side-menu-header/side-menu-header';
import { SideMenuOptions } from '../../components/side-menu/side-menu-options/side-menu-options';
import { SideMenu } from "../../components/side-menu/side-menu";
import { ShoppingCar } from '../../components/shopping-car/shopping-car';

@Component({
  selector: 'app-dasboard-page',
  imports: [
    RouterOutlet,
    // SideMenuHeader,
    // SideMenuOptions,
    SideMenu,
    ShoppingCar
],
  templateUrl: './dasboard-page.html',
  styles: ``
})
export default class DasboardPage {

}
