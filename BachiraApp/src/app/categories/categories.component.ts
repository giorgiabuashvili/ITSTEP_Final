import { Component } from '@angular/core';
import { Category } from '../classes/Product';
import { Filter } from '../classes/ProductService';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: string[] = [
    "Electronics",
    "Fashion",
    "Shoe",
    "Skincare"
  ]

  backgroundImages: string[] = [
    "assets/Images/fashion_bg.jpg",
    "assets/Images/shoes_bg.png",
    "assets/Images/electronic_bg.png",
    "assets/Images/skincare_bg.jpg"
  ]

  constructor(private appComponent: AppComponent) {}

  OpenProductsPage(i:number) {
    let filter: Filter = new Filter();
    filter.categories = [i];
    this.appComponent.OpenRouterLink(['categories/', JSON.stringify(filter)])
  }
}
