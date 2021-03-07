import { Component, OnInit } from '@angular/core';
import { Album } from 'src/model/album.model';
import { Artist } from 'src/model/artist.model';
import * as albumData from '../data/SearchResultsAlbums.json';
import * as artistData from '../data/SearchResultsArtist.json';
import { Util } from '../helper/util';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css'],
})
export class ArtistDiscographyComponent implements OnInit {
  albums?: Array<Album>;
  artist?: Artist;
  util?: Util;
  constructor() {}

  ngOnInit(): void {
    this.util = new Util();
    this.artist = (artistData as any).default;
    this.albums = albumData.albums.items;
  }
}
