import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BachiraApp';

  constructor(private router: Router) { }

  public OpenRouterLink(link:any[]) {
    this.router.navigate(link);
  }
}
