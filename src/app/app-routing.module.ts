import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { GenericArticleComponent } from './articles/generic-article/generic-article.component';


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
        path: 'github-code-reviews',
        component: GenericArticleComponent
      },
      {
        path: 'automation-with-scripts',
        component: GenericArticleComponent
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
