import { Component } from '@angular/core';
import { User } from '../classes/User';
import { UserManagement } from '../classes/UserManagement';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  enteredUser: User = new User();

  OnSubmit() {
    console.log(UserManagement.IsValidUser(this.enteredUser));
    this.enteredUser = new User();
  }
}
