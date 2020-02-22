import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { NavigationComponent } from './top-bar/navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { AboutComponent } from './about/about.component';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
