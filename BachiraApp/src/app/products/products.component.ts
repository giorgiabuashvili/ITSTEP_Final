import { Component, OnInit } from '@angular/core';
import { Filter, ProductService } from '../classes/ProductService';
import { Category, Product } from '../classes/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  enteredFilter: Filter = new Filter();
  filter: Filter = new Filter();

  constructor(private productService: ProductService, public appComponent: AppComponent, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Filter();

    if (this.activatedRoute.snapshot.paramMap.has("filter")) {
      let obj = JSON.parse(this.activatedRoute.snapshot.paramMap.get("filter") + ""); 
      this.filter = Filter.parse(obj);
      this.enteredFilter = this.filter;
      console.log(this.filter);
      this.Filter();
    }

  }

  Filter() {
    this.filter = this.enteredFilter;
    this.productService.GetProductsByFilter(this.filter).then(res => {
      this.products = res;
    })
  }

  Reset() {
    this.enteredFilter = new Filter();
  }

  parse(selected: string) {
    this.enteredFilter.categories[0] = parseInt(selected);
  }
}
