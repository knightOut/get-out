import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  host: {      class:'login'
    },
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user= {
    email : '',
    password : ''
  };

  constructor(private Login: LoginService, private router: Router) {  }

  onSubmit(form: NgForm): void {
      this.router.navigate(['/likes']);

      this.Login.loginWithEmail(this.user.email, this.user.password);
      console.log(form);
    };
}
