import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../classes/User';
import { UserManagement } from '../classes/UserManagement';
import { Product } from '../classes/Product';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: User = this.appComponent.user;
  cart: Product[] = [];
  changedUser: User = this.user;
  updatingUser: boolean = false;
  totalCost: number = 0;

  constructor(public appComponent: AppComponent, private userManagement: UserManagement) {}

  UpdateTotalCost(): void {
    this.totalCost = 0;
    this.cart.forEach(product=>{
      this.totalCost += product.price;
    })
  }

  ngOnInit(): void {
    this.ParseCart();
    this.UpdateTotalCost();
  }

  public OnExitButtonClick() {
    this.appComponent.ExitUser();
    this.appComponent.OpenRouterLink(['']);
  }
  
  public Start() {
    this.updatingUser = true;
  }
  
  public ChangeUser() {
    this.updatingUser = false;
    this.user = this.changedUser;
    this.userManagement.UpdateUser(this.user);
    this.appComponent.EnterUser(this.user);
  } 

  public RemoveFromCart(i: number) {
    this.cart.splice(i, 1);
    this.user.cart = this.cart;
    this.appComponent.EnterUser(this.user);
    this.UpdateTotalCost();
  }

  public ParseCart() {
    this.user.cart.forEach(prod=>{
      this.cart.push(Product.parse(prod));
    })
  }

  public OpenPurchasePage() {
    this.appComponent.purchaseData = this.cart;
    this.appComponent.OpenRouterLink(['purchase'])
  }
}
