import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const users = [
      { id: 1, name: 'Jorma', password: 'salasana', posts: [1] },
      { id: 2, name: 'Pentti', password: '1234', posts: [2] },
      { id: 3, name: 'Seppo', password: 'sanasala', posts: [3] },
    ];
    const posts = [
      {
        id: 1,
        title: 'Testpost JS',
        content: 'pitkäpostaus',
        responses: [
          { id: 1, poster: 2, content: 'Asdf' },
          { id: 2, poster: 3, content: 'Animaatio testi' },
        ],
        poster: 1,
        subject: 1,
      },
      {
        id: 2,
        title: 'Testpost 2 JS',
        content: 'Loreem iipsuum iipsum loorem',
        responses: [{ id: 1, poster: 1, content: 'sussas' }],
        poster: 2,
        subject: 1,
      },
      {
        id: 3,
        title: 'Testpost 3 JS',
        content: 'sussas',
        responses: [{ id: 1, poster: 3, content: 'JeeJee' }],
        poster: 3,
        subject: 1,
      },
      {
        id: 4,
        title: 'HTML-postaus',
        content: 'Lorem ipsum',
        responses: [{ id: 1, poster: 1, content: 'NouNou' }],
        poster: 3,
        subject: 2,
      },
      {
        id: 5,
        title: 'HTML-postaus numero kaksi',
        content: 'Hötömölö',
        responses: [{ id: 1, poster: 1, content: 'Uuwii' }],
        poster: 2,
        subject: 2,
      },
      {
        id: 6,
        title: 'CSS-postaus',
        content: 'sussas',
        responses: [{ id: 1, poster: 3, content: 'JeeJee' }],
        poster: 3,
        subject: 3,
      },
      {
        id: 7,
        title: 'CSS-postaus 2',
        content: 'Lorem ipsum',
        responses: [{ id: 1, poster: 1, content: 'NouNou' }],
        poster: 1,
        subject: 3,
      },
      {
        id: 8,
        title: 'CSS-postaus taas',
        content: 'Sössö',
        responses: [{ id: 1, poster: 1, content: 'Uuwii' }],
        poster: 2,
        subject: 3,
      },
    ];
    return { users, posts };
  }
}
