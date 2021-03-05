import { Component, OnInit } from '@angular/core';
import { Album } from 'src/model/album.model';
import { Artist } from 'src/model/artist.model';
import * as albumData from '../data/SearchResultsAlbums.json';
import * as artistData from '../data/SearchResultsArtist.json';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {
  // albums: Array<Album>;
  // artist: Artist;
  constructor(albums: Array<Album>, artist : Artist ) {
    // this.albums = albums;
    // this.artist = artist;
   }

  ngOnInit(): void {
    // this.albums = albumData.albums.items;
    // this.artist = (artistData as any).default;
  //  console.log(albumData)
  }

}
