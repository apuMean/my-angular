import { Component, OnInit } from '@angular/core';
import { ViewUsersService } from './../services/view-users.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
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
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (isConfirm) {
      if (isConfirm) {
        console.log('Deleting.....');
        swal("Deleted!", "Your file has been deleted.", "success").then(function () {
          console.log('Deleted successfully');
          this.user.delete(i);
          console.log('after deletion');
        });
      } else {
        swal("Cancelled", "Your file is safe", "error");
      }
      // this.user.delete(i);
      // swal(
      //   'Deleted!',
      //   'Your file has been deleted.',
      //   'success'
      // )
    });
    // var a = confirm("Are you sure , you want to delete...?");
    // if (a) {
    //   this.user.delete(i);
    // }
    // swal({
    // title: 'Hello',
    // text: "session('flash_message_delete.message')",   
    // type: "session('flash_message_delete.level')",   
    // showCancelButton: true,   
    // confirmButtonColor: "#DD6B55",   
    // confirmButtonText: "Yes, delete it!",   
    // cancelButtonText: "No, cancel please!",   
    // closeOnConfirm: false,   
    // closeOnCancel: false
    // },function(isConfirm){   
    //   if (isConfirm) 
    //     {     
    //       swal("Deleted!", "Your file has been deleted.", "success");   
    //     } 

    //   else
    //     {     
    //       swal("Cancelled", "Your file is safe", "error");   
    //     }
    //   });
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
