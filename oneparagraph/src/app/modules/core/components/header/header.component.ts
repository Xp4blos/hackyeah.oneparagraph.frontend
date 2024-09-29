import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private user: UserService) {}
  ngOnInit(): void {
    this.auth.loadToken();
    if (this.auth._token) {
      this.user.loginUser();
    }
  }
}
