import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Album } from 'src/model/album.model';
import * as data from '../data/NewReleasesAlbums.json';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit {
  releases: Array<Album>;

  constructor() {
    this.releases = [];
  }

  ngOnInit(): void {
    this.releases = data.albums.items;
  }

  convertDate(date: string): string {
    let converted = new Date(date);
    return (
      converted.getMonth() +
      1 +
      '/' +
      converted.getDate() +
      '/' +
      converted.getFullYear()
    );
  }

  cropTitle(title: string, size: number): string {
    if (title.length > size) {
      title = title.substring(0, size - 3);
      title += '...';
    }
    return title;
  }
}
