import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public MarkedNavLink = 0;
  public NavLinks: string[] = [
    "home",
    "products",
    "categories",
    "brands",
    "pricing",
  ];

  constructor(public appComponent: AppComponent) {}

  ngOnInit(): void {
    console.log(this.appComponent.user.avatar);
  }

  public SetCorrectNavLink(i: number) {
    this.MarkedNavLink = i;
  }

}
