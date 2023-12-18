import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private api: ApiService) {}

  canActivate() {
    // return true;
    if (this.api.loggedIn) {
      return true;
    } else {
      alert('You are not logged in!');
      return false;
    }
  }
}
