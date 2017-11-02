import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs/add/operator/toPromise';
import { UsersSignUp } from "./../register/signup";
import { SignupService } from './../services/register.service';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2';
// import { ToastsManager } from 'ng2-toastr';
// import 'ng2-toastr/ng2-toastr.js';
// import 'ng2-toastr/bundles/ng2-toastr.min.css';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


@Injectable()
export class RegisterComponent implements OnInit {
  // swal: any;
  signupForm: FormGroup;
  // private viewContainerRef: ViewContainerRef;
  // constructor(private user: SignupService, public fb: FormBuilder, public toastr: ToastsManager, viewContainerRef: ViewContainerRef) {

  //   this.viewContainerRef = viewContainerRef;
  //   this.toastr.setRootViewContainerRef(viewContainerRef);
  // }
  constructor(private user: SignupService, public fb: FormBuilder, private router: Router) {

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
    // this.toastr.success('Hi there', 'Success');



    // alert("Registered Successfully.....")
    //console.log("Inside ADDD-----------------", data);
    //Validators.minLength(8), Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9]*$')
    this.user.save(data);
    // this.router.navigate(['../login'])
  }


}

