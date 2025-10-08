import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-intro',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './mission-intro.component.html',
  styleUrls: ['./mission-intro.component.scss']
})
export class MissionIntroComponent {
  constructor() {}
}