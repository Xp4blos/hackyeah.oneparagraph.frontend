import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  userState: boolean = false;
  constructor(
    public userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}
  errorMessage!: string;
  email!: string;
  loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });
  onLogin() {
    this.authService
      .loginUser(
        this.loginForm.getRawValue().email,
        this.loginForm.getRawValue().password
      )
      .subscribe({
        next: (val) => {
          this.errorMessage = '';

          this.authService.handleAuthentication(
            val.accessToken,
            val.refreshToken,
            val.expiresIn
          );

          this.userService.loginUser();

          this.router.navigate(['/categories']);
        },
        error: (err) => {
          this.errorMessage = 'Wrong login data';
        },
      });
  }
  logout() {
    this.userService.userState = false;
    this.authService.logout();
  }
  ngOnInit(): void {}
}
