import { Artist } from './artist.model';
import { Image } from './image.model';
import { Track } from './track.model';

export class Album {
  id?: string = '';
  type?: string = '';
  artists?: Array<Artist> = [];
  available_markets?: Array<string>;
  href?: string = '';
  images?: Array<Image> = [];
  name: string = '';
  release_date?: string = '';
  total_tracks?: number = 0;
  uri?: string = '';
  label?: string = '';
  popularity?: number = 0;
  copyrights?: Array<{ text: string; type: string }> = [];
  tracks?: {
    items: Array<Track>;
  } = { items: [] };
  constructor() {}
}
