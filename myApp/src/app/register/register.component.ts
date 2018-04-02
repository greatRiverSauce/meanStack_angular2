import { Component, OnInit } from '@angular/core';
import { UserService } from '../share/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, , private router: Router) { }

  ngOnInit() {
  }
  onSignup(form) {
    console.log('11');
    this.userService.createUser(form.value).subscribe(
      (data) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
