import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { UsersSignUp } from './../register/signup';

@Injectable()
export class SignupService {
  connection = 'http://localhost:3000/api/signup';
  constructor(private http: Http, private router: Router) { }
  private headers = new Headers({ 'Content-Type': 'application/json' });


  save(data): Promise<UsersSignUp> {
    console.log(data);
    this.http.post(this.connection, data, { headers: this.headers }).toPromise();
    return;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}




