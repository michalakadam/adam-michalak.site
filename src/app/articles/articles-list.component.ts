import { Component } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';
import { ArticleMeta } from './article.model';
import {RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-articles-list',
    templateUrl: './articles-list.component.html',
    standalone: true,
    imports: [
        RouterLink,
        AsyncPipe
    ]
})
export class ArticlesListComponent {
    articles$: Observable<ArticleMeta[]>;

    constructor(private articles: ArticleService) {
        this.articles$ = this.articles.list();
    }
}