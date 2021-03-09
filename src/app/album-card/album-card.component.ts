import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/model/album.model';
import { Util } from '../helper/util';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css'],
})
export class AlbumCardComponent implements OnInit {
  @Input() album: Album;
  @Input() displayArtists?: boolean;
  util: Util;
  constructor(album: Album) {
    this.album = album;
    this.util = new Util();
  }

  ngOnInit(): void {
    console.log(this.album);
    this.util = new Util();
  }
}
