import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const user1 = new User();
    user1.password = "1234";
    user1.userName = "Sergiu";
    this.aplicationUsers.push(user1);
  }

  aplicationUsers: Array<User> = [];
  userName: string = "";
  password: string = "";

  login() {
    this.aplicationUsers.forEach((user: User) => {
      if (this.userName === user.userName && this.password === user.password) {
        console.log("Login succesfull!");
      } else {
        console.log("Login failed");
      }
    });
  }
}

class User {

  userName: string;
  password: string;

}