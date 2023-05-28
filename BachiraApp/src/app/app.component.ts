import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './classes/User';
import { Product } from './classes/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BachiraApp';
  isLogined: boolean = false;
  user: User = new User();

  purchaseData: Product[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    let tryToGetUserJSON: string | null = localStorage.getItem("entered_user");
    if (tryToGetUserJSON != null && tryToGetUserJSON != "") {
      this.user = User.parse(JSON.parse(tryToGetUserJSON));
      this.isLogined = true;
    }
  }

  public OpenRouterLink(link:any[]) {
    this.router.navigate(link);
  }

  public EnterUser(user: User) {
    this.isLogined = true;
    this.user = user;
    localStorage.setItem("entered_user", JSON.stringify(this.user));
  }

  public ExitUser() {
    this.isLogined = false;
    this.user = new User();
    localStorage.setItem("entered_user", "");
  }

  public OpenProduct(id: number) {
    this.OpenRouterLink(['products/', id]);
  }
}


