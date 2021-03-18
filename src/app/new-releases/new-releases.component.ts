import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/model/album.model';
import { AlbumService } from '../album.service';
import * as data from '../data/NewReleasesAlbums.json';
import { Util } from '../helper/util';
import { MusicDataService } from '../services/music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit {
  releases: any;
  releasesSub: any;
  util?: Util;

  constructor(private musicService: MusicDataService) {
    this.util = new Util();
    this.releases = [];
  }
  ngOnInit(): void {

    this.util = new Util();
    this.releasesSub = this.musicService.getNewReleases().subscribe((data) => {
      this.releases = data.albums.items;
      console.log(this.releases);
    });
  }

  ngOnDestroy(): void {
    this.releasesSub.unsubscribe();
  }
}
