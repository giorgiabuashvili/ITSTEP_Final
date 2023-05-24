import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../classes/ProductService';
import { Product } from '../classes/Product';
import { User } from '../classes/User';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product: Product = new Product();

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private appComponent: AppComponent) {}

  ngOnInit(): void {
    let id: number = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.productService.GetProductById(id).then(res=>{
      if (res == undefined) {
        this.appComponent.OpenRouterLink(['error']);
        return;
      }

      this.product = Product.parse(res);
    })
  }

  AddToCart() {
    if (!this.appComponent.isLogined) {
      this.appComponent.OpenRouterLink(['login'])
      return;
    }

    this.appComponent.user.cart.push(this.product);
    this.appComponent.EnterUser(this.appComponent.user);
  }

}
