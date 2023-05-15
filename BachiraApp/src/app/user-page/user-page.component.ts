import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  user: User = this.appComponent.user;
  constructor(public appComponent: AppComponent) {}

  public OnExitButtonClick() {
    this.appComponent.ExitUser();
    this.appComponent.OpenRouterLink(['']);
  }
}
