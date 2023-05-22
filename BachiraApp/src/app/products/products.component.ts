import { Component, OnInit } from '@angular/core';
import { Filter, ProductService } from '../classes/ProductService';
import { Product } from '../classes/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  enteredFilter: Filter = new Filter();
  filter: Filter = new Filter();

  constructor(private productService: ProductService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Filter();
  }

  Filter() {
    this.filter = this.enteredFilter;
    console.log(this.filter)
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
