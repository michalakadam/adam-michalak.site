import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model';

import { contents as articlesContents } from "./articles.json"

@Injectable({
  providedIn: 'root',
 })
export class ArticleDispatcherService {
  articles: Article[];
  indexOfCurrentArticle = -1;
  
  articles$: Observable<Article[]>;
  previousArticle$: Observable<Article>;
  currentArticle$: Observable<Article>;
  nextArticle$: Observable<Article>;

  constructor() {
    this.createObservableWithArticles(this.getArticlesFromJson());
  }

  private createObservableWithArticles(articles: Article[]) {
    this.articles$ = Observable.create(
      observer => {
        observer.next(articles);
      }
    );
  }

  private getArticlesFromJson(): Article[] {
    const articles: Article[] = new Array<Article>();
    articlesContents.forEach(article => {
      articles.push(article);
    });
    this.articles = articles;
    return articles;
  }

  articleOpenedFromUrl(url: string) {
    this.indexOfCurrentArticle = this.computeIndexOfArticle(url);
    this.computeArticleObservables(this.articles[this.indexOfCurrentArticle]);
  }

  articleOpenedFromList(article: Article) {
    this.indexOfCurrentArticle = this.computeIndexOfArticle(article.routerLink);
    this.computeArticleObservables(article);
  }

  private computeIndexOfArticle(url: string) {
    return this.articles
      .map(article => article.routerLink)
      .indexOf(url);
  }

  private computeArticleObservables(article: Article) {
    this.currentArticle$ = this.createObservableWithArticle(article);
    this.previousArticle$ = this.createObservableWithArticle(this.computePreviousArticle(article));
    this.nextArticle$ = this.createObservableWithArticle(this.computeNextArticle(article));
  }

  private createObservableWithArticle(article: Article): Observable<Article> {
    return Observable.create(
      observer => {
        observer.next(article);
      }
    );
  }

  private computePreviousArticle(article: Article): Article {
    let indexOfPreviousArticle = -1;
    if (this.indexOfCurrentArticle === 0) {
      indexOfPreviousArticle = this.articles.length - 1;
    } else {
      indexOfPreviousArticle = this.indexOfCurrentArticle - 1;
    }
    if (indexOfPreviousArticle < 0) {
      throw new Error('Previous article was not found on the list of articles.')
    }
    return this.articles[indexOfPreviousArticle];
  }

  private computeNextArticle(article: Article): Article {
    let indexOfNextArticle = -1;
    if (this.indexOfCurrentArticle === this.articles.length - 1) {
      indexOfNextArticle = 0;
    } else {
      indexOfNextArticle = this.indexOfCurrentArticle + 1;
    }
    if (indexOfNextArticle < 0) {
      throw new Error('Next article was not found on the list of articles.')
    }
    return this.articles[indexOfNextArticle];
  }
}
