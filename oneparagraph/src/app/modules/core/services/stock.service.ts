import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  private stocks: Stock[] = [
    new Stock(
      'Microsoft',
      '+3,5%',
      'Microsoft growing potencial',
      ['Microsoft', 'Investment', 'Profit'],
      ['https://hello.com', 'https://super-news.gov.pl']
    ),
    new Stock(
      'Meta in trouble',
      '-1,3%',
      'Test',
      ['Meta', 'Investment'],
      ['https://witam.com', 'https://example.gov.pl', 'https://polyforge.com']
    ),
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }
}
