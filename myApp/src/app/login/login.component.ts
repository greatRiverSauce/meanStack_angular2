import { Component, OnInit } from '@angular/core';
import {AuthService} from "../share/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignin(form) {
    this.authService.authanticate(form.value.email, form.value.password);
  }

}
