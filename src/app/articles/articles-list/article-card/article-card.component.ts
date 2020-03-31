import { Component, Input } from '@angular/core';

import { Article } from '../../article.model';
import { Router } from '@angular/router';
import { ArticleDispatcherService } from '../../article-dispatcher.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {

  @Input() article: Article;

  constructor(private router: Router,
    private articleDispatcherService: ArticleDispatcherService) { }

  openArticle() {
    this.articleDispatcherService.articleOpenedFromList(this.article);
    this.router.navigate([this.article.routerLink]);
  }
}
