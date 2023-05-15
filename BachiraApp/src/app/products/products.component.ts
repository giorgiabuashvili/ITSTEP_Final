import { Component, OnInit } from '@angular/core';
import { ProductService } from '../classes/ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.GetData().then(res=>{
      console.log(res['products'])
    })
  }
}
