import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  public logout() {
    this.api.loggedIn = false;
    this.api.currentUser = null;
    this.router.navigateByUrl('/login');
  }
}
