import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowSizeDetector } from '../services/window-size-detector.service';
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    MatButton
  ]
})
export class AboutComponent implements OnDestroy {
  private subscription: Subscription;

  constructor(readonly windowSizeDetector: WindowSizeDetector, readonly changeDetector: ChangeDetectorRef) {
    this.subscription = this.windowSizeDetector.windowSizeChanged$.subscribe(
      () => {
        this.changeDetector.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
