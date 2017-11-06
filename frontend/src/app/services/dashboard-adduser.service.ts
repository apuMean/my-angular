import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { UsersSignUp } from './../register/signup';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import swal from 'sweetalert2';


@Injectable()
export class DashboardAdduserService {


  connection = 'http://localhost:3000/api/signup';
  constructor(private http: Http, private router: Router) { }
  private headers = new Headers({ 'Content-Type': 'application/json' });






  save(data): Observable<any> {


    this.http.post(this.connection, data, { headers: this.headers }).subscribe((result) => {

      if (result.json().status == 200) {
        swal({
          position: 'top-right',
          type: 'success',
          title: 'New User added successfully..!',
          showConfirmButton: false,
          timer: 3000
        })

      }
      else if (result.json().status == 299) {

        swal(
          'Oops...',
          'email already exists',
          'error'
        )
        window.location.reload(true);

      }
      else {
        console.log("err")
      }


    });
    return;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
