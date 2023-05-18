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
  isValidUser: boolean = true;

  constructor(public appComponent: AppComponent, private userManagement: UserManagement) {}

  OnSubmit() {
    this.isValidUser = this.userManagement.IsValidUser(this.enteredUser);
    if (this.isValidUser) {
      let user: User | undefined = this.userManagement.GetFullUser(this.enteredUser.email);
      if (user != undefined) this.appComponent.EnterUser(user);
    }
    this.enteredUser = new User();
  }
}
