import { Component } from '@angular/core';

import { Article } from './article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {
 
  private articles: Array<Article> = [
    
  ];


  constructor() { }

}
