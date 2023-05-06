import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  MarkedNavLink = 0;
  NavLinks: string[] = [
    "Home",
    "Products",
    "Categories",
    "Brands",
    "Pricing"
  ]

  constructor(public appComponent: AppComponent) {}

  SetCorrentNavLink(i: number) {
    this.MarkedNavLink = i;
  }
}
