import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../../core/services/http.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  errorMessage: string = '';

  registerForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  onRegister() {
    this.auth
      .registerUser(
        this.registerForm.getRawValue().email,
        this.registerForm.getRawValue().password
      )
      .subscribe({
        next: (response) => {
          console.log(response);

          this.userService.userState = false;
          this.router.navigate(['/user']);
        },
        error: (err) => {
          this.errorMessage =
            'One or more validation errors. Password must contain 1 capital letter, 1 special character and min 8 characters';
        },
      });
  }
}
