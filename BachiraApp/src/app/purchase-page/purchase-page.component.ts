import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserPageComponent } from '../user-page/user-page.component';
import { Product } from '../classes/Product';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.scss']
})
export class PurchasePageComponent implements OnInit {
  cardNumber: number = 0;
  nameOnCard: string = "";
  expiryDate: { month: number, year: number } = { month: 0, year: 0 };
  secCode: number = 0;;

  totalCost: number = 0;
  thanksForYourPuchase: boolean = false;
  cart: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute, private appComponent: AppComponent, private userPageComponent: UserPageComponent) { }

  ngOnInit(): void {
    this.cart = this.appComponent.purchaseData;
    this.cart.forEach(product=>{
      this.totalCost += product.price;
    })
  }

  Submit() {
    this.totalCost = 0;
    this.thanksForYourPuchase = true;

    for (let i = 0; i < this.cart.length; i++) {
      this.userPageComponent.RemoveFromCart(i)
    }
  }

}
