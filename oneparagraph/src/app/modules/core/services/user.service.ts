import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public userState = false;

  loginUser() {
    this.userState = true;
  }
  logoutUser() {
    this.userState = false;
  }
}
