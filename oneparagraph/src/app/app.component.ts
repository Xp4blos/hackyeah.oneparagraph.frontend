import { Component, OnInit } from '@angular/core';
import { UserService } from './modules/core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'oneparagraph';
  constructor(private userService: UserService) {}
  onActivate(event: any) {
    if (localStorage.getItem('token') == undefined) {
      this.userService.userState = false;
    } else {
      this.userService.userState = true;
    }
    console.log('navigation log: ', this.userService.userState);
    document.exitFullscreen();
  }

  ngOnInit(): void {
    document.exitFullscreen();
  }
}
