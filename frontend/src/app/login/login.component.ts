import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { LoginService } from '../services/login.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})







export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private user: LoginService) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9]*$')]),
    });
  }

  public onSubmit(data) {
    console.log("Inside ADDD-----------------", data);
    this.user.save(data);


  }

}






















