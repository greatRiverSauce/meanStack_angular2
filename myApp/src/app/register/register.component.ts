import { Component, OnInit } from '@angular/core';
import { UserService } from '../share/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSignup(form) {
    console.log('11');
    this.userService.createUser(form.value);
    // const email = form.value.email;
    // const password = form.value.password;
    //
    // console.log(email + ', ' + password);
  }
}
