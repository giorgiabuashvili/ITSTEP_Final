import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Filter, ProductService } from '../classes/ProductService';
import { Category, Product } from '../classes/Product';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  numberOfFashionProducts: number = 0;
  numberOfElectronicsProducts: number = 0;
  numberOfShoeProducts: number = 0;
  numberOfSkincareProducts: number = 0;

  constructor(public appComponent: AppComponent, public productService: ProductService, public categoriesComponent: CategoriesComponent) {}

  async ngOnInit() {

    this.productService.GetProductsByFilter(new Filter()).then(res => {
      this.products = res;
      console.log(this.products);

      this.products.forEach(prod=> {
        if (prod.categories.includes(Category.electronics)) this.numberOfElectronicsProducts++;
        if (prod.categories.includes(Category.fashion)) this.numberOfFashionProducts++;
        if (prod.categories.includes(Category.skincare)) this.numberOfSkincareProducts++;
        if (prod.categories.includes(Category.shoes)) this.numberOfShoeProducts++;
      })
    })
  }
}
