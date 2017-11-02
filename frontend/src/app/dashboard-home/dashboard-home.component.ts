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
        var userDelete = this.user.delete(i).subscribe(response => {
          if (response.status == 200) {
            this.user.view().subscribe(value => {
              this.getData = value.json();

            })
          }
          else {
            console.log("delete failed")
          }
        });
        // window.location.reload(true);


      }
      else {
        console.log("delete unsuccessful.............");
      }

    });


    // window.location.reload(true);
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

    swal(
      'Update Successful',
      'user data has been updated successfully!',
      'success'
    ).then(() => {
      var userUpdate = this.user.update(firstname, lastname, email, contact).subscribe(response => {
        if (response.status == 200) {
          this.user.view().subscribe(value => {
            this.getData = value.json();

          })
        } else {
          console.log("delete failed")
        }
      });
    })


    // this.user.update(firstname, lastname, email, contact);


    // window.location.reload(true);
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
