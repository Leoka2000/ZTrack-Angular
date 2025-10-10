import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BgShadesComponent } from "../bg-shades/bg-shades.component";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-mission-intro',
  standalone: true,
  imports: [MatButtonModule, BgShadesComponent, MatIcon],
  templateUrl: './mission-intro.component.html',
  styleUrls: ['./mission-intro.component.scss']
})
export class MissionIntroComponent {
  constructor() {}
}