import { Component, HostListener, OnInit } from '@angular/core';
import { WindowSizeDetector } from './services/window-size-detector.service';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {PageFooterComponent} from "./page-footer/page-footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent, PageFooterComponent],
})
export class AppComponent implements OnInit {

  constructor(
    readonly windowSizeDetector: WindowSizeDetector,
  ) {}

  ngOnInit() {
    // Throw setting window size to event loop so that it happens
    // after all components are initialized.
    setTimeout(() => {
      this.windowSizeDetector.windowSizeChanged(window.innerWidth);
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.windowSizeDetector.windowSizeChanged(window.innerWidth);
  }
}
