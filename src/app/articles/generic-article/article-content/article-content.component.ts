import { Component, Input } from '@angular/core';
import { Article } from '../../article.model';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent {

  @Input() article: Article;
  
  constructor() { }

}
