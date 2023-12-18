import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user';
import { Post } from './post';
import { Response } from './response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public currentUser!: User | null;
  public loggedIn = false;

  private postsUrl = 'api/posts';
  private usersUrl = 'api/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.usersUrl);
  }
  getPosts() {
    return this.http.get(this.postsUrl);
  }

  addUser(user: User) {
    return this.http.post(this.usersUrl, user);
  }
  addPost(post: Post) {
    return this.http.post(this.postsUrl, post);
  }
  addResponse(post: Post) {
    return this.http.put(this.postsUrl, post);
  }
  genId(data: Post[] | User[] | Response[]) {
    return Math.max(...data.map((x) => x.id)) + 1;
  }
}
