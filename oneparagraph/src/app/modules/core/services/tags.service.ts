import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor() {}
  private tags: Tag[] = [
    new Tag('Basic Materials', true),
    new Tag('Communication Services', true),
    new Tag('Consumer Cyclical', true),
    new Tag('Consumer Defensive', true),
    new Tag('Consumer Goods', true),
    new Tag('Energy', true),
    new Tag('Financial', true),
    new Tag('Financial Services', true),
    new Tag('Healthcare', true),
    new Tag('Industrial Goods', true),
    new Tag('Industrials', true),
    new Tag('Real Estate', true),
    new Tag('Services', true),
    new Tag('Technology', true),
    new Tag('Utilities', true),
    new Tag('N/A', true),
  ];
  // Basic Materials,
  // Communication Services,
  // Consumer Cyclical,
  // Consumer Defensive,
  // Consumer Goods,
  // Energy,
  // Financial,
  // Financial Services,
  // Healthcare,
  // Industrial Goods,
  // Industrials,
  // Real Estate,
  // Services,
  // Technology,
  // Utilities
  //N/A
  getTags(): Tag[] {
    return this.tags;
  }

  public isTagActive(category: string): boolean {
    const tag = this.tags.find((t) => t.name === category);
    return tag ? tag.state : false;
  }
  changeTagState(tag: Tag): Tag {
    tag.state = !tag.state;
    return tag;
  }
}
