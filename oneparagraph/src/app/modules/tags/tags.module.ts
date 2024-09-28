import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './components/tags/tags.component';
import { TagsRoutingModule } from './tags-routing.module';

@NgModule({
  declarations: [TagsComponent],
  imports: [CommonModule, TagsRoutingModule],
})
export class TagsModule {}
