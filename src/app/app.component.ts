import { Component, HostListener, OnInit } from '@angular/core';
import { WindowSizeDetector } from './services/window-size-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(readonly windowSizeDetector: WindowSizeDetector) {}

  ngOnInit() {
    // Throw setting window size to event loop so that it happens
    // after all components are initialized.
    setTimeout(() => {
      this.windowSizeDetector.windowSizeChanged(window.innerWidth);
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.windowSizeDetector.windowSizeChanged(window.innerWidth);
  }
}
