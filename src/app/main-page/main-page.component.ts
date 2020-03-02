import { Component } from '@angular/core';

import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  state('active', style({ opacity: 1 })),
  state('inactive', style({ opacity: 0 })),
  transition('* => inactive', [animate(1750)])
]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [fadeOut],
})
export class MainPageComponent {
 
  private description = "self-taught";
  private invocationNumber = 0;
  private state = "active";

  constructor() { }

  private pickDescription(): void {
    if (this.invocationNumber % 3 === 0) {
      this.description = "highly-driven";
    } else if (this.invocationNumber % 3 === 1) {
      this.description =  "continously growing";
    } else {
      this.description = "self-taught";
    }
    this.invocationNumber++;
  }

  onDone($event: any) {
    this.pickDescription();
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
