/**********************************************************************************
 *   WEB422 – Assignment05
 *   I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
 *   assignment has been copied manually or electronically from any other source (including web sites) or *
 *   distributed to other students.*
 *  *
 *   Name: Maickel Siqueira Student ID: 129337192 Date: 2021-03-27
 * *********************************************************************************/

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchString: string = '';
  title = 'music';

  constructor(private router: Router) {}

  handleSearch(f: NgForm): void {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = '';
  }
}
