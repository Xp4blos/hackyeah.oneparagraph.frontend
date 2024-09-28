import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './components/stock/stock.component';
import { StockRoutingModule } from './stock-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StockCardComponent } from './components/stock-card/stock-card.component';

@NgModule({
  declarations: [StockComponent, StockCardComponent],
  imports: [CommonModule, StockRoutingModule, SharedModule],
})
export class StockModule {}
