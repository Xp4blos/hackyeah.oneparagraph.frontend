import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  date: Date = new Date();

  sources: Array<string> = [
    'https://witam.com',
    'https://bober.gov.pl',
    'https://poliforge.com',
  ];
}
