import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/model/artist.model';

import { MusicDataService } from '../services/music-data.service';
import { UtilsService } from '../services/utils.service';

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

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicDataService,
    public utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe((params) => {
      console.log('called search');
      this.searchQuery = params.q;
      console.log(params.q);
      this.artistsSub = this.musicService.searchArtists(params.q).subscribe(
        (data) => {
          console.log(data.artists.items[0]);
          /** Popularity is track-based and a measure of how many plays a track
           * received and how recent those plays are. Then artist popularity is derived from that.
           * So it makes a good property to use for sorting. source:
           *  https://community.spotify.com/t5/Content-Questions/Artist-popularity/td-p/4415259
           */
          this.results = data.artists?.items
            .filter((artist: Artist) => artist.images.length > 0)
            .sort(
              (a: { popularity: string }, b: { popularity: string }) =>
                a.popularity < b.popularity
            );
        },
        (error) => console.log(console.log('Handle bad request'))
      );
    });
  }
}
