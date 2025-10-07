import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-meal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-meal.html',
  styles: ``
})
export default class SearchMeal implements OnInit {
  meals: any[] = [];
  firstLetter: string = '';
constructor(private http: HttpClient) {}

 ngOnInit(): void {
      this.getMealsByFirstLetter('a');
  }

 getMealsByFirstLetter(firstLetter: string): void {
  this.firstLetter = firstLetter;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  this.http.get<any>(url)
    .subscribe((response: any) => {
      this.meals = response.meals;
    });
  }
}
