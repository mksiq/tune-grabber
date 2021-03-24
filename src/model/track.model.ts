import { Album } from './album.model';
import { Artist } from './artist.model';

export class Track {
  id: string = '';
  preview_url: string = '';
  track_number: number = 0;
  name: string = '';
  duration_ms: number = 0;
  album: Album = new Album();
  artists: Array<Artist> = [];
  constructor() {}
}
