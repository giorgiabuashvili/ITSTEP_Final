import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public MarkedNavLink = 0;
  public NavLinks: string[] = [
    "home",
    "products",
    "categories",
    "brands",
  ];

  constructor(public appComponent: AppComponent) {}

  public SetCorrectNavLink(i: number) {
    this.MarkedNavLink = i;
  }

}
