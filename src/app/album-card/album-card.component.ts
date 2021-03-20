import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Album } from 'src/model/album.model';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css'],
})
export class AlbumCardComponent implements OnInit {
  public cardSize: string = '200px';
  @Input() album: Album;
  @Input() displayArtists?: boolean;
  constructor(album: Album, public utilService: UtilsService) {
    this.album = album;
  }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 622) this.cardSize = '600px';
    else if (window.innerWidth < 1000) this.cardSize = '250px';
    else this.cardSize = '280px';
    console.log(this.cardSize);
  }
}
