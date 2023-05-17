import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Filter, ProductService } from '../classes/ProductService';
import { Product } from '../classes/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(public appComponent: AppComponent, public productService: ProductService) {}

  async ngOnInit() {
    this.productService.GetProductsByFilter(new Filter()).then(res => {
      this.products = res;
    })
  }
}
