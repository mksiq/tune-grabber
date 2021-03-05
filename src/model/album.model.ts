import { Artist } from './artist.model';
import { Image } from './image.model';

export class Album {
  type: string;
  artists: Array<Artist>;
  available_markets: Array<string>;
  href: string;
  images: Array<Image>;
  name: string;
  release_date: string;
  total_tracks: Number;
  uri: string;
  constructor(
    type: string,
    artists: Array<Artist>,
    markets: Array<string>,
    href: string,
    images: Array<Image>,
    name: string,
    release: string,
    tracks: Number,
    uri: string
  ) {
    this.type = type;
    this.artists = artists;
    this.href = href;
    this.available_markets = markets;
    this.name = name;
    this.release_date = release;
    this.total_tracks = tracks;
    this.uri = uri;
    this.images = images;
  }

  
}
