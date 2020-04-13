import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubCodeReviewsComponent } from './github-code-reviews/github-code-reviews';
import { AutomationWithScriptsComponent } from './automation-with-scripts/automation-with-scripts';


@NgModule({
  declarations: [
    GithubCodeReviewsComponent,
    AutomationWithScriptsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GithubCodeReviewsComponent,
    AutomationWithScriptsComponent,
  ]
})
export class ContentTemplatesModule { }
