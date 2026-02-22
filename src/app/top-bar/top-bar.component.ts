import { Component } from '@angular/core';

import {RouterLink} from "@angular/router";
import {NavigationComponent} from "./navigation/navigation.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, NavigationComponent],
})
export class TopBarComponent {}
