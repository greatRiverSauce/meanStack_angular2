import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{
  constructor(private http: HttpClient) {}
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
        console.log(data);
      })
  }
}
