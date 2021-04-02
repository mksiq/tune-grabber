import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Artist } from '../model/artist.model';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css'],
})
export class ArtistCardComponent implements OnInit {
  public cardSize: string = '200px';
  @Input() artist: Artist = new Artist();

  constructor(public utilService: UtilsService) {}

  ngOnInit(): void {
    this.onResize();
  }
  
  /**
   * Tries to minimize how much a album can grow in small windows
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 622) this.cardSize = '600px';
    else if (window.innerWidth < 1000) this.cardSize = '250px';
    else this.cardSize = '280px';
    console.log(this.cardSize);
  }
}
