import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// Variables describing possible window sizes must match those from src/variables.scss
export const DESKTOP = 960;

/** Exposes flags describing current window width. */
@Injectable({
  providedIn: 'root',
})
export class WindowSizeDetector {
  private readonly windowSizeChangedSubject = new Subject<boolean>();

  readonly windowSizeChanged$: Observable<boolean>;
  isMobileScreen: boolean;

  constructor() {
    this.windowSizeChanged$ = this.windowSizeChangedSubject.asObservable();
    this.updateWindowSizeFlags(window.innerWidth);
  }

  windowSizeChanged(windowSize: number) {
    this.updateWindowSizeFlags(windowSize);
    this.windowSizeChangedSubject.next(true);
  }

  private updateWindowSizeFlags(windowSize: number) {
    this.isMobileScreen = windowSize < DESKTOP;
  }
}
