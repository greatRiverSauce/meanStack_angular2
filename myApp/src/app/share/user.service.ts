import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService{
  constructor(private http: HttpClient, private router: Router) {}
  createUser(user: User) {
    this.http.post('http://localhost:8000/user/create', user)
      .subscribe((data) => {
        if (data['success']) {
          console.log('success');
        }
      })
  }
  getUserByEmail(email: string) {
    this.http.get('http://localhost:8000/user/email/' + email)
      .subscribe((data) => {
        if (data) {
          console.log(data);
          this.router.navigate(['/home']);
        } else {
          console.log('This email address does not exist');
        }
      })
  }
}
