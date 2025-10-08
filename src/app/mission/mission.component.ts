import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor } from '@angular/common';
import { MissionIntroComponent } from '../mission-intro/mission-intro.component';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgFor, NgClass, MissionIntroComponent],
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
      title: 'LED Lightning',
      description:
        'The green flashing LED on the device helps the farmer find the animal even in low light.',
      class: 'led'
    }
  ];
}
