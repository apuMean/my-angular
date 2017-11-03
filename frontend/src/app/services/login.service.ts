import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { UsersLogin } from './../login/login';



@Injectable()
export class LoginService {
  private isUserLoggedIn;
  public email;
  connection = 'http://localhost:3000/api/login';

  constructor(private http: Http, private router: Router) {
    this.isUserLoggedIn = false;

  }
  private headers = new Headers({ 'Content-Type': 'application/json' });


  setUserLoggedIn() {
    console.log("setUserLoggedIn service called");
    this.isUserLoggedIn = true;
  }


  getUserLoggedIn() {
    console.log("getUserLoggedIn service called");
    if (localStorage.getItem('token')) {
      console.log("localStorage.getItem('token')", localStorage.getItem('token'))
      return true;
    }
    else {
      console.log('getuserloggedin error')
      return false;
    }
  }






  save(data): Observable<any> {
    console.log("hdfsgfdhx", data);

    this.http.post(this.connection, data, { headers: this.headers }).subscribe((result) => {

      if (result.json().status == 200) {
        console.log("in mainpage", result.status)
        console.log("Login success result data", result);
        localStorage.setItem('token', result.json().token);
        this.setUserLoggedIn();
        localStorage.setItem('userloggedin', "true");
        localStorage.setItem('email', result.json().email);
        this.router.navigate(['/dashboard']);
      }
      else if (result.json().status == 299) {

        console.log("in dashboard", result.status)
        alert("invalid user");
        this.router.navigate(['/']);

      }
      else {
        console.log(" else ");
      }


    });
    return;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}






