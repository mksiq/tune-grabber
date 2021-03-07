import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/model/album.model';
import * as data from '../data/NewReleasesAlbums.json';
import { Util } from '../helper/util';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit {
  releases: Array<Album>;
  util?: Util;
  constructor() {
    this.util = new Util();
    this.releases = [];
  }

  ngOnInit(): void {
    this.util = new Util();
    this.releases = data.albums.items;
  }
}
