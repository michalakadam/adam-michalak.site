import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { NavigationComponent } from './top-bar/navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { AboutComponent } from './about/about.component';
import { ArticleCardComponent } from './articles/articles-list/article-card/article-card.component';
import { GenericArticleComponent } from './articles/generic-article/generic-article.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContentTemplatesModule } from './articles/generic-article/content-templates/content-templates.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ArticlesListComponent,
    NavigationComponent,
    MainPageComponent,
    UnderConstructionComponent,
    PageNotFoundComponent,
    PageFooterComponent,
    AboutComponent,
    ArticleCardComponent,
    GenericArticleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule,
    ContentTemplatesModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
