import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query,
  keyframes,
} from '@angular/animations';

import { Post } from '../post';
import { User } from '../user';

@Component({
  selector: 'app-forum-core',
  templateUrl: './forum-core.component.html',
  styleUrls: ['./forum-core.component.css'],
  animations: [
    trigger('contentanimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(
          '500ms ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(0.1px)',
              offset: 0.5,
            }),
            style({ opacity: 1, transition: 'translateY(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
    trigger('slide-in', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '500ms ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(50px)',
                  offset: 0,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ])
        ),
      ]),
    ]),
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500),
        style({ opacity: 1 }),
      ]),
    ]),
  ],
})
export class ForumCoreComponent implements OnInit {
  @Input() posts!: Post[];
  @Input() users!: User[];

  public currentlyOpen = 0;
  public responsesOpen = 0;
  public showResponseText = false;

  constructor(private api: ApiService) {}

  public openForumItem(id: number) {
    if (id !== this.currentlyOpen) {
      this.currentlyOpen = id;
      this.responsesOpen = 0;
      this.showResponseText = false;
    } else {
      if (this.currentlyOpen > 0) {
        this.currentlyOpen = 0;
        this.responsesOpen = 0;
        this.showResponseText = false;
      } else {
        this.currentlyOpen = id;
      }
    }
  }
  public openResponses(id: number) {
    if (this.responsesOpen > 0) {
      this.responsesOpen = 0;
    } else {
      this.responsesOpen = id;
    }
  }
  public openResponseTextArea() {
    this.showResponseText = !this.showResponseText;
  }
  public submitResponse(post: Post, response: any) {
    response.id = this.api.genId(post.responses);
    response.poster = this.api.currentUser?.id;

    post.responses.push(response);
    this.api.addResponse(post).subscribe();
    this.api.getPosts().subscribe((posts) => console.log(posts));
  }

  ngOnInit(): void {}

  public getAuthor(id: number) {
    for (let user of this.users) {
      if (user.id === id) {
        return user.name;
      }
    }
    return 'User not found!';
  }
}
