import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleCardComponent } from './articles/articles-list/article-card/article-card.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ContentTemplatesModule } from './articles/generic-article/content-templates/content-templates.module';
import { GenericArticleComponent } from './articles/generic-article/generic-article.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './top-bar/navigation/navigation.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ArticleCardComponent,
    ArticlesListComponent,
    GenericArticleComponent,
    LandingPageComponent,
    NavigationComponent,
    PageFooterComponent,
    PageNotFoundComponent,
    TopBarComponent,
    UnderConstructionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ContentTemplatesModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
