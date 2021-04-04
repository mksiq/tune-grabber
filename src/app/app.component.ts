/**********************************************************************************
 *   WEB422 – Assignment05
 *   I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
 *   assignment has been copied manually or electronically from any other source (including web sites) or *
 *   distributed to other students.*
 *  *
 *   Name: Maickel Siqueira Student ID: 129337192 Date: 2021-03-27
 * *********************************************************************************/

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event, NavigationStart, Router } from '@angular/router';
import { User } from './model/user.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  searchString: string = '';
  title = 'music';
  token: User = new User();
  routerSub: any;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.routerSub = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // only read the token on "NavigationStart"
        this.token = this.authService.readToken();
        console.log(this.token)
      }
    });
    
  }

  handleSearch(f: NgForm): void {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
