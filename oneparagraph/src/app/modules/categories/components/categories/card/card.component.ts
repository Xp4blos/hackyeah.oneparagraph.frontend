import { Component, Input, OnInit } from '@angular/core';
import { IndustryParagraph } from '../../../../core/models/paragraph.model';
import { TagsService } from '../../../../core/services/tags.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() paragraph!: IndustryParagraph;
  show = true;
  constructor(private tagsService: TagsService) {}
  date!: Date;
  category!: string;
  paragraphText!: string;
  tags!: string[];
  sources!: string[];
  sourceURLs!: string[];
  ngOnInit(): void {
    this.date = this.paragraph.dateTime;
    this.category = this.paragraph.industry;
    this.paragraphText = this.paragraph.paragraph;
    this.sources = this.paragraph.sourceNames;
    this.sourceURLs = this.paragraph.sourceUrls;
    this.tags = this.paragraph.stocks;

    this.show = this.tagsService.isTagActive(this.category);
  }
}
