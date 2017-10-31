import { Component, OnInit } from '@angular/core';
//import { Logger } from "angular2-logger/core"; // ADD THIS
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// import { SweetAlertService } from 'angular-sweetalert-service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class MainBodyComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;

  }

  ngOnInit() {

  }
  // , private alertService: SweetAlertService
  // const options = {
  //   title: 'Are you sure?',
  //   text: "You won't be able to revert this!",
  //   type: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // };
  // SweetAlert.confirm(options);
}
