import { Component } from '@angular/core';
import { User } from '../classes/User';
import { UserManagement } from '../classes/UserManagement';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  enteredUser: User = new User();

  constructor(public appComponent: AppComponent) {}

  OnSubmit() {
    if (UserManagement.IsValidUser(this.enteredUser)) {
      let user: User | undefined = UserManagement.GetFullUser(this.enteredUser.email);
      if (user != undefined) this.appComponent.EnterUser(user);
    }
    this.enteredUser = new User();
  }
}
