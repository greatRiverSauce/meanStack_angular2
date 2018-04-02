import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private http:HttpClient) {}
  authanticate(email:string, password: string ) {
    return this.http.get('http://localhost:8000/user/email/' + email)
      .map(user => {
        return user;
      });
  }
}
