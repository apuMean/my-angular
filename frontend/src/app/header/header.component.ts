import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkLogin: boolean = true;
  constructor(private user: LoginService) {
    /* console.log('called', user.getUserLoggedIn())
    if (user.getUserLoggedIn()) {

      this.checkLogin = false;
    } else {
      this.checkLogin = true;
    } */
  }

  ngOnInit() {
  }
  ngDoCheck() {
    this.checkLogin = !(this.user.getUserLoggedIn());
  }

}
