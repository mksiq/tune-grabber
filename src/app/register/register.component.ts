import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterUser } from '../model/registerUser.model';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUser: RegisterUser = { userName: '', password: '', password2: '' };
  warning: string = '';
  success: boolean = false;
  loading: boolean = false;
  authSub: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm){
    if(this.registerUser.password == this.registerUser.password2) {
      this.loading = true;
      this.authSub = this.authService.register(this.registerUser).subscribe( () => {
        this.success = true;
        this.loading = false;
        this.warning = '';
      }, (error) => {
        this.success = false;
        this.loading = false;
        this.warning = error.console.error.message;
      });
    } else {
      this.warning = 'Passwords do not match.'
    }
  }
}