import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';
import { environment } from './../../environments/environment';

import { mergeMap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MusicDataService {
  constructor(
    private spotifyToken: SpotifyTokenService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getNewReleases(): Observable<SpotifyApi.ListOfNewReleasesResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(
          'https://api.spotify.com/v1/browse/new-releases',
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  getArtistById(id: string): Observable<SpotifyApi.SingleArtistResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.SingleArtistResponse>(`https://api.spotify.com/v1/artists/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
    );
  }

  getAlbumsByArtistId(id: string): Observable<SpotifyApi.ArtistsAlbumsResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.ArtistsAlbumsResponse>(
          `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      })
    );
  }

  getAlbumById(id: string): Observable<SpotifyApi.SingleAlbumResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.SingleAlbumResponse>(`https://api.spotify.com/v1/albums/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
    );
  }

  searchArtists(artist: string): Observable<SpotifyApi.ArtistSearchResponse> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<SpotifyApi.ArtistSearchResponse>(
          `https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=50`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      })
    );
  }

  addToFavourites(id: string): Observable<[String]> {
    const user: User = this.authService.readToken();
    return this.http.put<any>(
      `${environment.userAPIBase}user/favourites/${id}`,
      user
    );
  }

  removeFromFavourites(id: string): Observable<SpotifyApi.MultipleTracksResponse> {
    return this.http
      .delete<[String]>(`${environment.userAPIBase}user/favourites/${id}`)
      .pipe(
        mergeMap((favouritesArray) => {
          if (favouritesArray.length > 0) {
            let ids: string = [...favouritesArray].join(',');
            return this.spotifyToken.getBearerToken().pipe(
              mergeMap((token) => {
                return this.http.get<any>(
                  `https://api.spotify.com/v1/tracks?ids=${ids}`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
              })
            );
          }
          return new Observable((o) => o.next({ tracks: [] }));
        })
      );
  }

  getFavourites(): Observable<SpotifyApi.MultipleTracksResponse> {
    return this.http
      .get<[String]>(`${environment.userAPIBase}user/favourites/`)
      .pipe(
        mergeMap((favouritesArray) => {
          if (favouritesArray && favouritesArray.length > 0) {
            let ids: string = [...favouritesArray].join(',');
            return this.spotifyToken.getBearerToken().pipe(
              mergeMap((token) => {
                return this.http.get<any>(
                  `https://api.spotify.com/v1/tracks?ids=${ids}`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
              })
            );
          }
          console.log('empty')
          return new Observable((o) => o.next({ tracks: [] }));
        })
      );
  }
}
