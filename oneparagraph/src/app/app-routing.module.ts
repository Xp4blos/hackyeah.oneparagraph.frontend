import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'stock',
    loadChildren: () =>
      import('./modules/stock/stock.module').then((m) => m.StockModule),
  },
  {
    path: 'trending',
    loadChildren: () =>
      import('./modules/trending/trending.module').then(
        (m) => m.TrendingModule
      ),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./modules/tags/tags.module').then((m) => m.TagsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
