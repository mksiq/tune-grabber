import { Injectable } from '@angular/core';
import { Album } from 'src/model/album.model';
import * as albumData from './data/SearchResultsAlbums.json';
import * as artistData from './data/SearchResultsArtist.json';
import * as data from './data/NewReleasesAlbums.json';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAlbumsByArtist(): Array<Album> {
    return albumData.albums.items;
  }

  getAlbumsNewReleases(): any {
    return data.albums.items;
  }
}
