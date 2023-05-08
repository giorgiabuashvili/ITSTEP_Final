import { Component } from '@angular/core';
import { User } from '../classes/User';
import { UserManagement } from '../classes/UserManagement';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  enteredUser: User = new User();
  accountAlreadyExists: boolean = false;

  OnSubmit() {
    this.accountAlreadyExists = !UserManagement.Update(this.enteredUser);
    this.enteredUser = new User();
    UserManagement.PrintUsers();
  }
}
