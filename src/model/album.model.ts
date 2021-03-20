import { Injectable } from '@angular/core';
import { Artist } from './artist.model';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})

export class Album {
  id:string;
  type: string;
  artists?: Array<Artist>;
  available_markets?: Array<string>;
  href?: string;
  images?: Array<Image>;
  name: string;
  release_date: string;
  total_tracks?: number;
  uri?: string;
  label?: string;
  popularity?: number;
  copyrights?: Array<{ text: string; type: string }>;
  tracks?: {
    items: Array<{ id:string, preview_url: string, track_number: number; name: string; duration_ms: number }>;
  };
  constructor() {
    this.release_date = '';
    this.type = '';
    this.id = '';
    this.name = '';
  }
}
