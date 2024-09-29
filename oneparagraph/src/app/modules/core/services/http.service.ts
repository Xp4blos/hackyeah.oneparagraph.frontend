import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
export interface IndustryParagraph {
  id: string; // Guid in C# maps to string in TypeScript
  industry: string; // Assuming Industries is an enum in TypeScript
  paragraph: string;
  dateTime: Date; // DateTime in C# maps to Date in TypeScript
  stocks: string[];
  sourceUrls: string[];
  sourceNames: string[];
}
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getIndustryParagraphs() {
    return this.http.get<IndustryParagraph[]>(
      environment.apiUrl + '/api/get-industry-paragraphs'
    );
  }
}
