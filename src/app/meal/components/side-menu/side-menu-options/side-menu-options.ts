import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


interface MenuOption {
  label: string;
  sublabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
],
  templateUrl: './side-menu-options.html',
  styles: ``
})
export class SideMenuOptions {

  menuOptions: MenuOption[]=[
  
      {
    label: 'Buscar comida',
    sublabel: 'Buscador Comida',
    icon: 'fa-solid fa-magnifying-glass',
    route: '/dashboard/search-meal'},
          {
    label: 'Buscar categoria',
    sublabel: 'Buscador categorias',
    icon: 'fa-solid fa-magnifying-glass',
    route: '/dashboard/search-category'},
        {
    label: 'Buscar Bebida',
    sublabel: 'Buscador Bebidas',
    icon: 'fa-solid fa-magnifying-glass',
    route: '/dashboard/search-drink'},

  ]

}
