import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent },
];