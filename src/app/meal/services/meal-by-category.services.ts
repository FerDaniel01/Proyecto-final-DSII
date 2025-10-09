import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Meal, CategoryMeal, CategoryResponse } from "../interfaces/giphy.interfaces";

@Injectable({
  providedIn: 'root'
})

export class MealByCategoryService {
  //peticion HTTP para obtener las categorias
  private http= inject(HttpClient);
  categories=signal<CategoryMeal[]>([])

  // metodo para realizar peticion a la API y obtener las categorias
  loadcategories(){
    this.http.get<CategoryResponse>('https://www.themealdb.com/api/json/v1/1/list.php?c=list').subscribe((response)=>{
      console.log(response.meals);
      this.categories.set(response.meals);
    });
  }

}



