import { Component, OnDestroy, OnInit } from '@angular/core';
import { Track } from '../model/track.model';
import { MusicDataService } from '../services/music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit, OnDestroy {
  favourites: Array<Track> = [];
  favouriteSub: any;

  constructor(private musicService: MusicDataService) {}

  ngOnInit(): void {
    this.favouriteSub = this.musicService.getFavourites().subscribe((data) => {
      this.favourites = data.tracks;
    });
  }

  ngOnDestroy(): void {
    if (this.favouriteSub) this.favouriteSub.unsubscribe();
  }

  handleRemoveClick(id: string): void {
    this.favouriteSub = this.musicService
      .removeFromFavourites(id)
      .subscribe((data) => {
        this.favourites = data.tracks;
      });
  }
}
