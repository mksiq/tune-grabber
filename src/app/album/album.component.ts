import { Component, OnInit } from '@angular/core';
import { Album } from 'src/model/album.model';
import * as data from '../data/SearchResultsAlbum.json';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album?: Album;
  constructor() { 
  }

  ngOnInit(): void {
    if(data != undefined){
      this.album = (data as any).default;
      console.log(this.album)
    } 
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
}
