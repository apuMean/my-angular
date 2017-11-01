import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    var data = { token: localStorage.getItem('token'), email: localStorage.getItem('email') };
    localStorage.removeItem('token');

    localStorage.removeItem('userloggedin');
    this.router.navigateByUrl("/");
  }

}
