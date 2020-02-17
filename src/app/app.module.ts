import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { BioComponent } from './bio/bio.component';
import { NavigationComponent } from './top-bar/navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ArticlesListComponent,
    BioComponent,
    NavigationComponent,
    MainPageComponent,
    UnderConstructionComponent
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
