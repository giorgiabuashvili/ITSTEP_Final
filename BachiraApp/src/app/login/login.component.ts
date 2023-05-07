import { Component } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  enteredUser: User = new User();
}
