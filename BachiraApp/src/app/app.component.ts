import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BachiraApp';
  isLogined: boolean = false;
  user: User = new User();

  constructor(private router: Router) { }

  ngOnInit(): void {
    let tryToGetUser: string | null = localStorage.getItem("entered_user");
    if (tryToGetUser != null) {
      this.user = JSON.parse(tryToGetUser);
      this.isLogined = true;
      console.log(this.user.avatar)
    }

  }

  public OpenRouterLink(link:any[]) {
    this.router.navigate(link);
  }

  public EnterUser(user: User) {
    this.isLogined = true;
    this.user = user;
    localStorage.setItem("entered_user", JSON.stringify(this.user));
  }

  public ExitUser() {
    this.isLogined = false;
    this.user = new User();
  }
}


