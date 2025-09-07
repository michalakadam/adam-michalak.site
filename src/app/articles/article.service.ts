import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ArticleMeta } from './article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
    private index$: Observable<ArticleMeta[]>;

    constructor(private http: HttpClient) {
        this.index$ = this.http
            .get<ArticleMeta[]>('/assets/articles/index.json')
            .pipe(shareReplay(1));
    }

    list(): Observable<ArticleMeta[]> {
        return this.index$; // already sorted by the script
    }

    get(slug: string) {
        return this.index$.pipe(
            map(list => {
                const meta = list.find(a => a.slug === slug);
                if (!meta) throw new Error('Article not found');
                // load raw markdown by original filename
                return meta;
            })
        );
    }

    loadMarkdown(file: string) {
        return this.http
            .get(`/assets/articles/${file}`, { responseType: 'text' })
            .pipe(
                // remove leading --- ... --- (handles optional BOM too)
                map(md => md.replace(/^\uFEFF?---[\s\S]*?---\s*/, ''))
            );
    }
}