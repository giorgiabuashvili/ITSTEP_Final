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
  changedUser: User = this.user;
  updatingUser: boolean = false;

  constructor(public appComponent: AppComponent, private userManagement: UserManagement) {}

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
  } 
}
