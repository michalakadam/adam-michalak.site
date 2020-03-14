import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  isMobileScreen: boolean;

  ngOnInit() {
      this.isMobileScreen = this.computeIsMobileScreen(window.innerWidth);

      this.resizeObservable$ = fromEvent(window, 'resize');
      this.resizeSubscription$ = this.resizeObservable$.subscribe( event => {
        this.isMobileScreen = this.computeIsMobileScreen(window.innerWidth);
      });
  }

  private computeIsMobileScreen(screenWidth: number) {
    console.log(screenWidth);
    return screenWidth < 961 ? true : false;
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }
}
