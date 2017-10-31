import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard Service called ..getUserLoggedIn ', this.login.getUserLoggedIn());

    if (!this.login.getUserLoggedIn()) {

      this.router.navigate(['/']);
      console.log('UnAuthorized  user');
    }
    else {
      return this.login.getUserLoggedIn();
    }
  }
}




