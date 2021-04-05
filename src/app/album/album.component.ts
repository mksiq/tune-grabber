import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../model/album.model';
import { MusicDataService } from '../services/music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  album?: Album;
  albumSub: any;
  routeSub: any;
  musicSub: any;
  loading: boolean = true;

  constructor(
    private musicService: MusicDataService,
    private route: ActivatedRoute,
    public utilService: UtilsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.albumSub = this.musicService.getAlbumById(params.id).subscribe(
        (data) => {
          this.album = data;
          if (this.album) {
            this.loading = false;
          }
        },
        (error) => {
          console.error('Invalid album id.');
          this.loading = false;
        }
      );
    });
  }

  ngOnDestroy(): void {
    if(this.routeSub)
      this.routeSub.unsubscribe();
    if(this.album)
      this.albumSub.unsubscribe();
  }

  addToFavorites(trackID: string): void {
    this.musicSub = this.musicService.addToFavourites(trackID).subscribe(
      () => {
        this.snackBar.open('Adding to Favourites...', 'Done', {
          duration: 1500,
        });
      },
      (error) => {
        this.snackBar.open(
          error.error?.message,
          'Done',
          {
            duration: 1500,
          }
        );
      }
    );
  }
}
