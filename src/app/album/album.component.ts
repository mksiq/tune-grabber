import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/model/album.model';
import { MusicDataService } from '../services/music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  album?: Album;
  albumSub: any;
  routeSub: any;

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
        },
        (error) => console.log(console.log('Handle bad request'))
      );
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.albumSub.unsubscribe();
  }

  addToFavorites(trackID: string): void {
    console.log('clicked' + trackID);
    if (this.musicService.addToFavorites(trackID)) {
      this.snackBar.open('Adding to Favourites...', 'Done', {
        duration: 1500,
      });
    } else {
      this.snackBar.open(
        'Sorry, you reached max number for favourite tracks (50).',
        'Done',
        {
          duration: 1500,
        }
      );
    }
  }
}
