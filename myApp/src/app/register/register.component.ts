import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSignup(form) {
    console.log('11');
    const email = form.value.email;
    const password = form.value.password;
    console.log(email + ', ' + password);
  }
}
