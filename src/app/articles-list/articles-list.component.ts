import { Component, OnInit } from '@angular/core';

import { Article } from '../articles/article.model';
import * as articlesContents from "../articles/contents.json"

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
 
  articles: Array<Article> = [];

  constructor() { }

  ngOnInit() { 
    articlesContents.contents.forEach(article => {
      this.articles.push(article);
    });
  }

}
