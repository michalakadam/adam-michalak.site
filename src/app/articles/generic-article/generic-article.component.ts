import { Component, OnInit } from '@angular/core';

import { Article } from '../article.model';
import { ArticleDispatcherService } from '../article-dispatcher.service';
import { Router } from '@angular/router';

export enum ArticleNavigationRequestType {
  previous,
  next,
}

@Component({
  selector: 'app-generic-article',
  templateUrl: './generic-article.component.html',
  styleUrls: ['./generic-article.component.scss']
})
export class GenericArticleComponent implements OnInit {

  article: Article;

  constructor(private router: Router,
    private articleDispatcherService: ArticleDispatcherService) { }

  ngOnInit() {
    const articleOpenedFromList = !!this.articleDispatcherService.currentArticle$;
    if (!articleOpenedFromList) {
      this.articleDispatcherService.articleOpenedFromUrl(this.router.url);
    }
    this.articleDispatcherService.currentArticle$
      .subscribe(article => this.article = article);
  }
 
  onArticleRequested(requestedArticle: ArticleNavigationRequestType) {
    if (requestedArticle === ArticleNavigationRequestType.previous) {
      this.articleDispatcherService.previousArticle$
        .subscribe(article => this.navigateToRequestedArticle(article));
    } else if (requestedArticle === ArticleNavigationRequestType.next) {
      this.articleDispatcherService.nextArticle$
        .subscribe(article => this.navigateToRequestedArticle(article));
    }
  }

  private navigateToRequestedArticle(article: Article) {
    this.router.navigate([article.routerLink])
    this.articleDispatcherService.articleOpenedFromUrl(article.routerLink)
  }
}
