import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubCodeReviewsComponent } from './github-code-reviews/github-code-reviews';


@NgModule({
  declarations: [
    GithubCodeReviewsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GithubCodeReviewsComponent,
  ]
})
export class ContentTemplatesModule { }
