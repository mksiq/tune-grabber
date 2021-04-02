import { Image } from './image.model';

export class Artist {
  name: string = '';
  href: string = '';
  id: string = '';
  type: string = '';
  uri: string = '';
  popularity: number = 0;
  followers: { href: string; total: number } = { href: '', total: 0 };
  genres: Array<string> = [];
  images: Array<Image> = [];

  constructor() {}
}
