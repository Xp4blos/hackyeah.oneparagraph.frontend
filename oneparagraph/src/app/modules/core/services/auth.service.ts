import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Subject, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { UserService } from './user.service';
import { FormControl, FormGroup } from '@angular/forms';

interface AuthResponce {
  tokenType: string;
  accessToken: string;
  expiresIn: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _token!: string;

  get token() {
    return this._token;
  }

  constructor(private http: HttpClient, private userService: UserService) {}

  loginUser(email: string, password: string): Observable<AuthResponce> {
    let loginBody = {
      email: email,
      password: password,
    };
    console.log(email, password);

    return this.http.post<AuthResponce>(
      environment.apiUrl + '/login',
      loginBody
    );
  }
  registerUser(email: string, password: string): Observable<boolean> {
    let registerBody = {
      email: email,
      password: password,
    };
    return this.http.post<boolean>(
      environment.apiUrl + '/register',
      registerBody
    );
  }
  loadToken() {
    this._token = localStorage.getItem('token') || '{}';
  }
  handleAuthentication(
    token: string,
    refreshToken: string,
    expirationDate: string
  ) {
    this._token = token;
    localStorage.setItem('token', token);
  }
  logout() {
    this.userService.logoutUser();
    this._token = '';
    localStorage.removeItem('token');
  }
}
