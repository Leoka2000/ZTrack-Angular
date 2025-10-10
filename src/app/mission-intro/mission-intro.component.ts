import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BgShadesComponent } from "../bg-shades/bg-shades.component";

@Component({
  selector: 'app-mission-intro',
  standalone: true,
  imports: [MatButtonModule, BgShadesComponent, BgShadesComponent],
  templateUrl: './mission-intro.component.html',
  styleUrls: ['./mission-intro.component.scss']
})
export class MissionIntroComponent {
  constructor() {}
}