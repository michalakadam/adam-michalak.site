import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import {provideMarkdown} from "ngx-markdown";

bootstrapApplication(AppComponent, {
    providers: [
        provideZoneChangeDetection(),provideRouter(
            routes,
            withInMemoryScrolling({ anchorScrolling: 'enabled' })
        ),
        provideHttpClient(withFetch()),
        provideAnimations(),
        provideMarkdown(),
    ],
}).catch(err => console.error(err));