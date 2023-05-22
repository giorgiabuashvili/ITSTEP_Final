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

  constructor(private userManagement: UserManagement) {}

  OnSubmit() {
    this.userManagement.CreateNewUser(this.enteredUser).then(res=> {
      console.log(res);
    });
  }
}
