import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor } from '@angular/common';

import { BgShadesComponent } from '../bg-shades/bg-shades.component';
import { MissionIntroComponent } from '../pages/home-root/mission-intro/mission-intro.component';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, NgClass, MissionIntroComponent, BgShadesComponent],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {
  features = [
    {
      icon: 'query_stats',
      title: 'Real-time',
      description:
        'The location and movement data of the animals can be tracked in real time thanks to the latest GPS technology.',
      class: 'realtime'
    },
    {
      icon: 'shield',
      title: 'Waterproof',
      description:
        'The ear tag is completely waterproof, so it is completely resistant to all weather conditions.',
      class: 'waterproof'
    },
    {
      icon: 'lightbulb',
      title: 'Activity Tracking',
      description:
        'Our continuous tracking of your animal will keep you informed about the health status of that',
      class: 'led'
    }
  ];
}
