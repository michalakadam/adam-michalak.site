import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
