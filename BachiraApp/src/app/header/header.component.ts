import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MarkedNavLink = 0;
  NavLinks: string[] = [
    "home",
    "products",
    "categories",
    "brands",
    "pricing",
  ]

  constructor(public appComponent: AppComponent) {}
  ngOnInit(): void {
    console.log(this.appComponent.user.avatar);
  }

  SetCorrentNavLink(i: number) {
    this.MarkedNavLink = i;
  }
}
