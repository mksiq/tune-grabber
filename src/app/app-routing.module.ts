import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'artist', component: ArtistDiscographyComponent },
  { path: '*', component: NotFoundComponent },
  { path: '*', component: NotFoundComponent },
  { path: '*', component: NotFoundComponent },
  { path: '*', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
