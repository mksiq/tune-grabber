import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/model/artist.model';

import { MusicDataService } from '../services/music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  results: Array<Artist> = [];
  searchQuery: any;
  routeSub: any;
  artistsSub: any;

  constructor( private route: ActivatedRoute,  private musicService: MusicDataService) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log("called search")
      this.searchQuery = params.q;
      this.artistsSub = this.musicService.searchArtists(params.q).subscribe(
        (data) => {
          console.log(data)
          this.results = data.artists?.items;
        },
        (error) => console.log(console.log('Handle bad request'))
      );
    });
  }
}
