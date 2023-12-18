import { Response } from './response';
export interface Post {
  id: number;
  title: string;
  content: string;
  responses: Response[];
  poster: number;
  subject: 1 | 2 | 3;
}
