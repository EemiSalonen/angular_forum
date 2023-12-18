import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
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
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
