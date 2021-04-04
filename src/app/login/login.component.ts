import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = { userName: '', password: '', _id: '' };
  warning: string = '';
  loading: boolean = false;
  authSub: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm): void {
    if (this.user.password && this.user.userName) {      
      this.loading = true;
      this.authSub = this.authService.login(this.user).subscribe(
        (message) => {
          localStorage.setItem('access_token', message.token);
          this.loading = false;
          this.warning = '';
          this.router.navigate(['/newReleases']);
        },
        (error) => {
          this.loading = false;
          this.warning = error.error.message;
        }
      );
    } else {
      this.warning = 'Fill all fields.';
    }
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
}
