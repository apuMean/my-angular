import { Component, OnInit } from '@angular/core';
import { ViewUsersService } from './../services/view-users.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

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

    console.log("======ngOnInit=======");

  }
  delete(i) {
    alert("Are you sure , you want to delete...?")
    this.user.delete(i);
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
