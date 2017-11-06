import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { UsersSignUp } from "./../register/signup";
import { DashboardAdduserService } from './../services/dashboard-adduser.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-adduser',
  templateUrl: './dashboard-adduser.component.html',
  styleUrls: ['./dashboard-adduser.component.css']
})
export class DashboardAdduserComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private user: DashboardAdduserService, public fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {

    this.signupForm = this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('(?:[A-Z][a-z]+\s?)+')]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('(?:[A-Z][a-z]+\s?)+')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(40)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,8}$')]),
      contact: new FormControl('', [Validators.maxLength(10), Validators.minLength(10)]),
    }
    );
  }


  public onSubmit(data) {

    this.user.save(data);
  }
  get firstname() { return this.signupForm.get('firstname'); }
  get lastname() { return this.signupForm.get('lastname'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get contact() { return this.signupForm.get('contact'); }
}
