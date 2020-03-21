import { Component, OnInit } from '@angular/core';

import { Article } from './article.model';
import * as articlesContents from "./articles/contents.json"

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
 
  private articles: Array<Article> = [];

  constructor() { }

  ngOnInit() { 
    console.log(articlesContents.contents.forEach(article => {
      this.articles.push(article);
    }));
  }

}
