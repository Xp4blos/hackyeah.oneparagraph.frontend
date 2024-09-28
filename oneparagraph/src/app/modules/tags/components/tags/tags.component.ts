import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../../core/services/tags.service';
import { Tag } from '../../../core/models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent implements OnInit {
  constructor(private tagsService: TagsService) {}
  tags!: Tag[];
  ngOnInit() {
    this.tags = this.tagsService.getTags();
    console.log(this.tags);
  }
  tagState(tag: Tag) {
    this.tagsService.changeTagState(tag);
  }
}
