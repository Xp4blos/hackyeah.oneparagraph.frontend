import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { RouterModule } from '@angular/router';
import { StockModule } from './modules/stock/stock.module';
import { TagsModule } from './modules/tags/tags.module';
import { UserModule } from './modules/user/user.module';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { AuthInterceptor } from './modules/core/services/auth.interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrendingModule } from './modules/trending/trending.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    CategoriesModule,
    StockModule,
    TagsModule,
    UserModule,
    TrendingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
