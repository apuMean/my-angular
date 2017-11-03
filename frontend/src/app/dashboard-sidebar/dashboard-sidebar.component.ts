

import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from "@angular/router";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  constructor(private router: Router, private http: Http) { }
  showuser = 'http://localhost:3000/api/showdetails';

  public firstname;
  public email;
  public lastname;
  public path;
  public imgpath;


  ngOnInit() {
    this.showdetails();
  }
  showdetails() {
    console.log('started inside shownames')
    var mailId = localStorage.getItem('email')
    console.log('showname email', mailId)
    this.http.post(this.showuser, { body: mailId }).subscribe((result) => {
      console.log('showname response', result.json());
      this.firstname = result.json().firstname;
      this.lastname = result.json().lastname;
      this.email = result.json().email;

      this.path = result.json().path;
      this.imgpath = "../.." + this.path.substring(15);

      console.log('firstname and lastname IMGPATH ::', this.firstname, this.lastname, this.imgpath);


    });
  }
  logout() {
    var data = { token: localStorage.getItem('token'), email: localStorage.getItem('email') };
    localStorage.removeItem('email');

    localStorage.removeItem('token');
    localStorage.removeItem('user_token');
    this.router.navigateByUrl("/");
  }

}







