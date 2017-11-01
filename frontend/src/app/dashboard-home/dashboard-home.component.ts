import { Component, OnInit } from '@angular/core';
import { ViewUsersService } from './../services/view-users.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { SweetAlertService } from 'angular-sweetalert-service';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  p: number = 1;
  pageSize: number = 6;
  closeResult: string;
  getData: any = [];
  firstname: any;
  lastname: any;
  email: any;
  contact: any;

  userdata: any;


  connection1 = 'http://localhost:3000/viewUsers';
  uvdata: any = "default";
  i: any;
  constructor(private modalService: NgbModal, private user: ViewUsersService) {
    this.user.view().subscribe(value => {
      this.getData = value.json();
      console.log("inside component   >>", this.getData);
    })

  }


  ngOnInit() {

    console.log("Inside ngOnInit");

  }
  delete(i) {
    //this.user.delete(i);

    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((isConfirm) => {
      if (isConfirm) {
        var userDelete = this.user.delete(i);
      }
      else {
        console.log("unsuccessful.............");
      }

    });
    // swal({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then(function (isConfirm) {
    //   var userDelete = this.user.delete(i);
    // });

  }



  updateCall(id, f, l, e, c) {
    console.log('id', id);
    this.user.updateee(id);
    this.firstname = f;
    this.lastname = l;
    this.email = e;
    this.contact = c;

  }
  update1(firstname, lastname, email, contact) {
    swal({
      title: 'Processing Update',
      timer: 3000,
      onOpen: function () {
        swal.showLoading()
      }
    }).then(
      function () { },
      // handling the promise rejection
      function (dismiss) {
        if (dismiss === 'timer') {
          console.log('I was closed by the timer')
        }
      }
      );


    this.user.update(firstname, lastname, email, contact);



  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
