import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ArticleNavigationRequestType } from '../generic-article.component';

@Component({
  selector: 'app-article-navigation',
  templateUrl: './article-navigation.component.html',
  styleUrls: ['./article-navigation.component.scss',],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleNavigationComponent {

  @Output() articleRequested = new EventEmitter<ArticleNavigationRequestType>();

  constructor() { }

  goToPreviousArticle() {
    this.articleRequested.emit(ArticleNavigationRequestType.previous);
  }

  goToNextArticle() {
    this.articleRequested.emit(ArticleNavigationRequestType.next);
  }

}
