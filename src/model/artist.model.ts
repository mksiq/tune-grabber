import { Image } from "./image.model";

export class Artist {
  name: string;
  href: string;
  id: string;
  type: string;
  uri: string;
  popularity?: number;
  followers: {href: string, total: number} = {href: "", total: 0};
  genres: Array<string> = [];
  images: Array<Image> = [];
  
  constructor(name: string, href: string, id: string, uri: string, images: Array<Image>) {
    this.name = name;
    this.href = href;
    this.id = id;
    this.type = 'artist';
    this.uri = uri;
    this.images = images;
  }
}
