import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album } from 'src/model/album.model';
import { MusicDataService } from '../services/music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit, OnDestroy {
  releases: Array<Album> = [];
  releasesSub: any;

  constructor(private musicService: MusicDataService) {}

  ngOnInit(): void {
    this.releasesSub = this.musicService.getNewReleases().subscribe((data) => {
      this.releases = data.albums.items;
    });
  }

  ngOnDestroy(): void {
    this.releasesSub.unsubscribe();
  }
}
