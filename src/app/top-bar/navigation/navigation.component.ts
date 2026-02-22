import { Component } from '@angular/core';

import {RouterLink, RouterLinkActive} from "@angular/router";
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavigationComponent {
  constructor(public darkModeService: DarkModeService) {}
  
  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
