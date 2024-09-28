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
      'małomiękki korporacja',
      ['Microsoft', 'Jasny Chuj'],
      ['https://witam.com', 'https://bober.gov.pl', 'https://poliforge.com']
    ),
    new Stock(
      'Meta',
      '-1,3%',
      'Test',
      ['Meta', 'Mark'],
      ['https://witam.com', 'https://bober.gov.pl', 'https://poliforge.com']
    ),
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }
}
