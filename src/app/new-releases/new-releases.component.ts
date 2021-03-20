import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../services/music-data.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit, OnDestroy {
  releases: any;
  releasesSub: any;

  constructor(private musicService: MusicDataService) {

    this.releases = [];
  }
  ngOnInit(): void {
    this.releasesSub = this.musicService.getNewReleases().subscribe((data) => {
      this.releases = data.albums.items;
      console.log(this.releases);
    });
  }

  ngOnDestroy(): void {
    this.releasesSub.unsubscribe();
  }
}
