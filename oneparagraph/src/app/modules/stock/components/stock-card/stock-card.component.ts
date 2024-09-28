import { Component, Input, input, OnInit } from '@angular/core';
import { Stock } from '../../../core/models/stock.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrl: './stock-card.component.scss',
})
export class StockCardComponent implements OnInit {
  @Input() stock!: Stock;
  sources!: string[];
  name!: string;
  percent!: string;
  tags!: string[];
  desc!: string;

  stockProfit!: boolean;
  ngOnInit(): void {
    this.sources = this.stock.sources;
    this.name = this.stock.name;
    this.percent = this.stock.percent;
    this.tags = this.stock.tags;
    this.desc = this.stock.description;
    this.stockProfit = this.checkProfit();
    console.log(this.stockProfit);
  }

  checkProfit(): boolean {
    if (this.percent.includes('+')) {
      return true;
    } else {
      return false;
    }
  }
}
