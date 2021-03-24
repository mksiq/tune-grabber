import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/model/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  
  @Input() artist: Artist = new Artist();


  constructor() { }

  ngOnInit(): void {
  }

}
