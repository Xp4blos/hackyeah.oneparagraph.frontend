import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../core/services/stock.service';
import { Stock } from '../../../core/models/stock.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss',
})
export class StockComponent implements OnInit {
  constructor(private stockService: StockService) {}
  stocks!: Stock[];
  ngOnInit(): void {
    this.stocks = this.stockService.getStocks();
  }
}
