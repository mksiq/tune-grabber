import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

import { User } from '../model/user.model';
import { RegisterUser } from '../model/registerUser.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken(): any {
    return localStorage.getItem('access_token');
  }

  readToken(): any {
    const token: any = this.getToken();
    return helper.decodeToken(token);
  }

  isAuthenticated(): boolean {
    let token = this.getToken();
    return token ? true : false;
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${environment.userAPIBase}/login`, user);
  }

  logout(): void {
    localStorage.clear();
  }

  register(user: RegisterUser): Observable<any> {
    return this.http.post<any>(`${environment.userAPIBase}/register`, user);
  }
}
