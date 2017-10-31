import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { UsersSignUp } from "./../register/signup";
import { SignupService } from './../services/register.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


@Injectable()
export class RegisterComponent implements OnInit {
  // swal: any;
  signupForm: FormGroup;

  constructor(private user: SignupService, public fb: FormBuilder) {

  }

  ngOnInit() {

    this.signupForm = this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9]*$')]),
      contact: new FormControl('', [Validators.maxLength(10), Validators.minLength(10)]),
    }
    );
  }

  public onSubmit(data) {
    swal(
      'Welcome to Monsters hub..!',
      'Registration successful',
      'success'
    )
    // alert("Registered Successfully.....")
    //console.log("Inside ADDD-----------------", data);
    this.user.save(data);
  }


}

