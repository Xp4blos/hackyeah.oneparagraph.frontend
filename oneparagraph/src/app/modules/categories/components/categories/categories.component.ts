import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { AuthService } from '../../../core/services/auth.service';
import { IndustryParagraph } from '../../../core/models/paragraph.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  constructor(
    private http: HttpService,
    private auth: AuthService,
    public userService: UserService
  ) {}
  industryParagraphs!: IndustryParagraph[];
  loaded: boolean = false;
  ngOnInit(): void {
    console.log('get token: ' + this.auth.token);

    this.http.getIndustryParagraphs().subscribe({
      next: (response) => {
        this.industryParagraphs = response;
        console.log(this.industryParagraphs);
        this.loaded = true;
      },
    });
  }
}
