import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor() {}
  private tags: Tag[] = [
    new Tag('Tech', true),
    new Tag('Microsoft', false),
    new Tag('Test', true),
  ];

  getTags(): Tag[] {
    return this.tags;
  }

  changeTagState(tag: Tag): Tag {
    tag.state = !tag.state;
    return tag;
  }
}
