import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  public users!: any;

  public formNotValid = false;

  public loggedIn = false;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public login(formData: any, formValid: boolean | null) {
    if (!formValid) {
      this.formNotValid = true;
      return;
    }
    for (let user of this.users) {
      if (
        user.name === formData.username &&
        user.password === formData.password
      ) {
        this.api.currentUser = user;
        this.api.loggedIn = true;
        this.loggedIn = this.api.loggedIn;
        this.router.navigateByUrl('/landing');
        return;
      }
    }
    alert('Wrong username or password!');
  }

  public getUsers() {
    this.api.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
