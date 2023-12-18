import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
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
export class CreatepostComponent implements OnInit {
  public ngSelect = '1';
  public formNotValid = false;
  private posts: any;

  public postCreated = false;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe((data) => (this.posts = data));
  }

  public submitPost(formData: any, formValid: null | boolean) {
    if (!formValid) {
      this.formNotValid = true;
      return;
    }
    formData.id = this.api.genId(this.posts);
    formData.responses = [];
    formData.poster = this.api.currentUser?.id;
    formData.subject = Number(formData.subject);
    this.api.addPost(formData).subscribe();
    this.postCreated = true;
    setTimeout(() => {
      this.postCreated = false;
      switch (formData.subject) {
        case 1:
          this.router.navigateByUrl('/js');
          break;
        case 2:
          this.router.navigateByUrl('/html');
          break;
        case 3:
          this.router.navigateByUrl('/css');
      }
    }, 2000);
  }
}
