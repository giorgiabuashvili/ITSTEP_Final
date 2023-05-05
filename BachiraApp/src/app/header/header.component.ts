import { Component } from '@angular/core';

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

  SetCorrentNavLink(i: number) {
    this.MarkedNavLink = i;
  }
}
