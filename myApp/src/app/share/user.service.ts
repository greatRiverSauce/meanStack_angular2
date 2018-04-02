import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'


@Injectable()
export class UserService{
  constructor(private http: HttpClient, private router: Router) {}
  createUser(user: User) {
    return this.http.post('http://localhost:8000/user/create', user)
      .map((data) => {
        return data;
      })
  }
}
