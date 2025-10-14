import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';


@Component({
  selector: 'app-mission-intro',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink, BgShadesComponent],
  templateUrl: './mission-intro.component.html',
  styleUrls: ['./mission-intro.component.scss']
})
export class MissionIntroComponent {
  constructor() {}
}
