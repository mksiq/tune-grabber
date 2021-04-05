import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../model/artist.model';

import { MusicDataService } from '../services/music-data.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  results: Array<Artist> = [];
  searchQuery: any;
  routeSub: any;
  artistsSub: any;
  loading: boolean = true;

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
          /** Popularity is track-based and a measure of how many plays a track
           * received and how recent those plays are. Then artist popularity is derived from that.
           * So it makes a good property to use for sorting. source:
           *  https://community.spotify.com/t5/Content-Questions/Artist-popularity/td-p/4415259
           */
          this.results = data.artists?.items
            .filter((artist: Artist) =>
              artist.images ? artist.images.length > 0 : false
            )
            .sort((a, b) => b.popularity - a.popularity);
          if (this.results) {
            this.loading = false;
          }
        },
        (error) => {
          console.log(console.error('Invalid request.'));
          this.loading = false;
        }
      );
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) this.routeSub.unsubscribe();
    if (this.artistsSub) this.artistsSub.unsubscribe();
  }
}
