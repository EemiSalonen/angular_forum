import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post';
import { User } from '../user';

@Component({
  selector: 'app-forum-personal',
  templateUrl: './forum-personal.component.html',
  styleUrls: ['./forum-personal.component.css'],
})
export class ForumPersonalComponent implements OnInit {
  @Input() posts!: any;
  @Input() users!: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getPostsByUser();
  }

  getPostsByUser() {
    this.api.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.posts = this.posts.filter(
        (post: Post) => this.api.currentUser?.id === post.poster
      );
    });
    this.api.getUsers().subscribe((users) => (this.users = users));
  }
}
