import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  date: Date = new Date();
  constructor(private http: HttpService, private auth: AuthService) {}
  sources: Array<string> = [
    'https://witam.com',
    'https://bober.gov.pl',
    'https://poliforge.com',
  ];
  ngOnInit(): void {
    console.log('get token: ' + this.auth.token);

    this.http.getIndustryParagraphs().subscribe({
      next: (val) => {
        console.log(val);
      },
    });
  }
}
