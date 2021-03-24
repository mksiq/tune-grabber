import { Component, OnInit } from '@angular/core';
import { Track } from 'src/model/track.model';
import { MusicDataService } from '../services/music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favourites: Array<Track> = [];
  favouriteSub: any;

  constructor(private musicService: MusicDataService) {}

  ngOnInit(): void {
    this.favouriteSub = this.musicService.getFavorites().subscribe((data) => {
      console.log(data);
      this.favourites = data.tracks;
    });
  }

  handleRemoveClick(id: string): void {
    this.musicService.removeFromFavorites(id);
    this.favouriteSub = this.musicService.getFavorites().subscribe((data) => {
      console.log(data);
      this.favourites = data.tracks;
    });
  }
}
