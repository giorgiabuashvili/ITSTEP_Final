import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../classes/User';
import { UserManagement } from '../classes/UserManagement';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  user: User = this.appComponent.user;

  constructor(public appComponent: AppComponent, private userManagement: UserManagement) {}

  public OnExitButtonClick() {
    this.appComponent.ExitUser();
    this.appComponent.OpenRouterLink(['']);
  }

  public Update() {
    this.userManagement.UpdateUser(this.user);
  }
}
