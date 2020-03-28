import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Article } from '../article.model';

@Component({
  selector: 'app-generic-article',
  templateUrl: './generic-article.component.html',
  styleUrls: ['./generic-article.component.scss']
})
export class GenericArticleComponent implements OnInit {

  private article: Article;

  constructor() { }

  ngOnInit() {
    
  }

}
