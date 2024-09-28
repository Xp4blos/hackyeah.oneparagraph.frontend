import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { RouterModule } from '@angular/router';
import { StockModule } from './modules/stock/stock.module';
import { TagsComponent } from './modules/tags/components/tags/tags.component';
import { TagsModule } from './modules/tags/tags.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    CategoriesModule,
    StockModule,
    TagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
