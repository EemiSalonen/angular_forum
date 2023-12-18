import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forum-css',
  templateUrl: './forum-css.component.html',
  styleUrls: ['./forum-css.component.css'],
})
export class ForumCssComponent implements OnInit {
  public users!: any;
  public posts!: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getForumData();
  }

  public getForumData() {
    this.api.getUsers().subscribe((data) => {
      this.users = data;
    });
    this.api.getPosts().subscribe((data) => {
      this.posts = data;
      this.posts = this.posts.filter((post: Post) => post.subject === 3);
    });
  }
}
