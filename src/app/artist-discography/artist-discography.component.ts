import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/model/album.model';
import { Artist } from 'src/model/artist.model';
import { MusicDataService } from '../services/music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css'],
})
export class ArtistDiscographyComponent implements OnInit, OnDestroy {
  artistSub: any;
  albums: Array<Album> = [];

  albumsSub: any;
  artist?: Artist;
  routeSub: any;

  constructor(
    private musicService: MusicDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.artistSub = this.musicService.getArtistById(params.id).subscribe(
        (data) => {
          console.log(data);
          this.artist = data;
        },
        (err) =>
          console.error('Could notd fin any artist with id: ' + params.id)
      );
      this.albumsSub = this.musicService
        .getAlbumsByArtistId(params.id)
        .subscribe(
          (data) => {
            this.albums = data.items;
            this.albums = makeAlbumsUnique(data.items);
          },
          (err) =>
            console.error('Could not find any albums for the requested id')
        );
    });
  }

  ngOnDestroy(): void {
    this.artistSub.unsubscribe();
    this.albumsSub.unsubscribe();
    this.routeSub.unsubscribe();
  }
}

/**
 * Attempts to reduce the number of albums that are too similar to one another.
 * Here if one album has 3/4 of another album title than it should not be added.
 * Very inefficient algorithm as it can be potentially O(n^2)
 *
 * @param albums
 * @returns albums with more unique properties
 */
function makeAlbumsUnique(albums: Array<Album>): Array<Album> {
  let fixedAlbums: Array<Album> = [];
  for (let i = 0; i < albums.length; i++) {
    let exists: boolean = false;
    let threeQuarters = (albums[i].name.length / 4) * 3;
    for (let j = 0; j < fixedAlbums.length && !exists; j++) {
      if (
        albums[i].name.slice(0, threeQuarters).toUpperCase() ==
        fixedAlbums[j].name.slice(0, threeQuarters).toUpperCase()
      ) {
        exists = true;
      }
    }
    if (!exists) {
      fixedAlbums.push(albums[i]);
    }
  }
  return fixedAlbums;
}
