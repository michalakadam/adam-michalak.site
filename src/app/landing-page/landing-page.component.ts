import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowSizeDetector } from '../services/window-size-detector.service';
import { MatButton } from "@angular/material/button";

import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  state('active', style({ opacity: 1 })),
  state('inactive', style({ opacity: 0 })),
  transition('active => inactive', [animate(1250)]),
  transition('inactive => active', [animate(1250)])
]);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  animations: [fadeOut],
  imports: [
    MatButton
  ]
})
export class LandingPageComponent implements OnDestroy {

  secondVerse = "highly-driven";
  thirdVerse = "problem solver";
  private invocationNumber = 0;
  state = "inactive";
  private subscription: Subscription;

  constructor(readonly windowSizeDetector: WindowSizeDetector, readonly changeDetector: ChangeDetectorRef) {
    this.subscription = this.windowSizeDetector.windowSizeChanged$.subscribe(
      () => {
        this.changeDetector.detectChanges();
      }
    );
  }

  private pickDescription(): void {
    this.invocationNumber++;
    if (this.invocationNumber % 4 === 0) {
      this.secondVerse = "highly-driven";
      this.thirdVerse = "problem solver";
    } else if (this.invocationNumber % 4 === 1) {
      this.secondVerse = "self-taught";
      this.thirdVerse = "full stack developer";
    } else if (this.invocationNumber % 4 === 2) {
      this.secondVerse = "continuously-growing";
      this.thirdVerse = "technical leader";
    } else {
      this.secondVerse = "relentlessly-proactive";
      this.thirdVerse = "team player";
    }
  }

  onDone($event: any) {
    if (this.state === 'active') {
      // Just finished fading out to inactive, text is now invisible
      // This is the perfect time to change the text content
      this.state = 'inactive';
    } else {
      // Just finished fading in to active, text is now visible
      // Start the next cycle by fading out after a delay
      setTimeout(() => {
        this.pickDescription();
        this.state = 'active';
      }, 0);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
