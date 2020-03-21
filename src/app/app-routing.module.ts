import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './articles-list/article/article.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'articles',
    children: [
      {
        path: '',
        component: ArticlesListComponent
      },
      {
        path: 'deploy-angular-webapp',
        component: ArticleComponent
      },
      {
        path: 'html-in-email',
        component: ArticleComponent
      },
      {
        path: 'extreme-temperatures',
        component: ArticleComponent
      },
      {
        path: 'ultimate-breakfast',
        component: ArticleComponent
      },
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
