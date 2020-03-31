import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../article.model';
import { ArticleDispatcherService } from '../article-dispatcher.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private articles: Article[] = new Array<Article>();
  
  constructor(private articleDispatcherService: ArticleDispatcherService) { }

  ngOnInit() {
    this.subscription = this.articleDispatcherService.articles$
    .subscribe(
      articles => this.articles = articles
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
