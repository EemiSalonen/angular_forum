import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500),
        style({ opacity: 1 }),
      ]),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  public users!: any;

  public formNotValid = false;
  public userCreated = false;
  public passwordNotMatch = false;
  public usernameTaken = false;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public register(formData: any, formValid: null | boolean) {
    if (!formValid) {
      this.formNotValid = true;
      return;
    } else {
      this.formNotValid = false;
    }

    if (this.confirmUsername(formData.name)) {
      if (formData.password == formData.passwordconf) {
        this.addUser(formData, this.users);
        this.userCreated = true;
        setTimeout(() => {
          this.userCreated = false;
          this.router.navigateByUrl('/login');
        }, 2000);
      } else {
        this.passwordNotMatch = true;
        setTimeout(() => (this.passwordNotMatch = false), 2000);
      }
    } else {
      this.usernameTaken = true;
      setTimeout(() => (this.usernameTaken = false), 2000);
    }
  }

  private confirmUsername(username: string) {
    this.getUsers();

    for (let user of this.users) {
      if (username === user.name) {
        this.usernameTaken = true;
        return false;
      }
    }
    return true;
  }

  private getUsers() {
    this.api.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  private addUser(user: any, users: User[]) {
    user.id = this.api.genId(users);
    user.posts = [];
    delete user.passwordconf;
    this.api.addUser(user).subscribe((data) => {
      return data;
    });
  }
}
