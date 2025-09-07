import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ArticlesListComponent} from "./articles/articles-list.component";
import {ArticleDetailComponent} from "./articles/article-detail.component";

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'articles', component: ArticlesListComponent },
    { path: 'articles/:slug', component: ArticleDetailComponent },
    { path: '**', component: PageNotFoundComponent },
];