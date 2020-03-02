import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription } from 'rxjs';
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  state('active', style({ opacity: 1 })),
  state('inactive', style({ opacity: 0 })),
  transition('* => inactive', [animate(1500)])
]);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [fadeOut],
})
export class MainPageComponent implements OnInit, OnDestroy {
 
  private description = "self-taught";
  subscription: Subscription;
  private invocationNumber = 0;
  private state = "active";

  constructor() { }

  ngOnInit() {
    const source = interval(1500);
    this.subscription = source.subscribe(() => this.pickDescription());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

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
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
