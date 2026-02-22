import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";

import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  state('active', style({ opacity: 1 })),
  state('inactive', style({ opacity: 0 })),
  transition('active => inactive', [animate(1500)]),
  transition('inactive => active', [animate(1500)])
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
export class LandingPageComponent {

  secondVerse = "a staff engineer";
  thirdVerse = "who thinks in systems.";
  private invocationNumber = 0;
  state = "inactive";

  private pickDescription(): void {
    this.invocationNumber++;
    if (this.invocationNumber % 4 === 0) {
      this.secondVerse = "a staff engineer";
      this.thirdVerse = "who thinks in systems.";
    } else if (this.invocationNumber % 4 === 1) {
      this.secondVerse = "a platform engineer";
      this.thirdVerse = "scaling how teams ship software.";
    } else if (this.invocationNumber % 4 === 2) {
      this.secondVerse = "a technical leader";
      this.thirdVerse = "bridging code, architecture, and organizational design.";
    } else {
      this.secondVerse = "a team leader";
      this.thirdVerse = "building teams that ship with confidence.";
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
}
