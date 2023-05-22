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

    this.userManagement.GetUser(this.enteredUser).then(res=> {
      if (res == false) this.isValidUser = false;
      else {
        this.appComponent.EnterUser(User.parse(res));
        this.isValidUser = true;
      }
    })
  }
}
