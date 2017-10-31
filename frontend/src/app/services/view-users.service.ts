import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class ViewUsersService {
  viewusersUrl = 'http://localhost:3000/api/viewusers';
  edituserUrl = 'http://localhost:3000/api/edituser';
  deleteuserUrl = 'http://localhost:3000/api/deleteuser';

  constructor(private http: Http, private router: Router) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  udata: any = []
  delid: any;
  editid: any;
  view(): Observable<any> {
    console.log("view function in signup service");
    return this.http.get(this.viewusersUrl).map(userviewdata => {
      console.log("view function Backend Responce--------", userviewdata);
      return userviewdata;

    });
  }

  delete(i) {
    console.log("Index==of delete", i);
    // var d = confirm("Are u sure to delete");
    this.delid = i;
    // console.log("d", d);

    this.http.post(this.deleteuserUrl, { body: this.delid }).subscribe(userviewdata => {
      console.log("user data after delete", userviewdata);
      this.udata = userviewdata.json();
    });


    // console.log("Index==of delete", i);
    return;
  }



  updateee(i) {
    this.editid = i;
    console.log("Update id", this.editid);
  }


  update(firstname, lastname, email, contact): Observable<any> {
    console.log("Index==of update", this.editid);
    let x = this.editid;
    this.http.post(this.edituserUrl, { body: x, firstname, lastname, email, contact }).subscribe((result) => {
      console.log("user data after update", result);
      this.udata = result.json();
    });
    return;
  }

}
