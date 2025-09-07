import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs';
import {MarkdownComponent} from "ngx-markdown";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    standalone: true,
    imports: [
        MarkdownComponent,
        AsyncPipe
    ]
})
export class ArticleDetailComponent implements OnInit {
    md$!: Observable<string>;

    constructor(private route: ActivatedRoute, private articles: ArticleService) {}

    ngOnInit(): void {
        this.md$ = this.route.paramMap.pipe(
            switchMap(params => this.articles.get(params.get('slug')!).pipe(
                switchMap(meta => this.articles.loadMarkdown(meta.file))
            ))
        );
    }
}