import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor } from '@angular/common';

import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';
import { MissionIntroComponent } from '../mission-intro/mission-intro.component';
import { BgShadesBottomComponent } from "../../../bg-shades-bottom/bg-shades-bottom.component";

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    NgFor,
    NgClass,
    MissionIntroComponent,
    BgShadesComponent,
    BgShadesBottomComponent,
  ],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('800ms ease-out')),
    ]),
  ],
})
export class MissionComponent implements AfterViewInit {
  features = [
    {
      icon: 'query_stats',
      title: 'Real-time',
      description:
        'The location and movement data of the animals can be tracked in real time thanks to the latest GPS technology.',
      class: 'realtime',
    },
    {
      icon: 'shield',
      title: 'Waterproof',
      description:
        'The ear tag is completely waterproof, so it is completely resistant to all weather conditions.',
      class: 'waterproof',
    },
    {
      icon: 'lightbulb',
      title: 'Activity Tracking',
      description:
        'Our continuous tracking of your animal will keep you informed about the health status of that',
      class: 'led',
    },
  ];

  cardStates: ('hidden' | 'visible')[] = [];

  constructor(private el: ElementRef) {
    // Initialize all cards as hidden
    this.cardStates = new Array(this.features.length).fill('hidden');
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const section = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Trigger animation only when user scrolls down to the section
    if (section.top < windowHeight - 100 && section.bottom > 0) {
      this.animateCardsSequentially();
    }
  }

  ngAfterViewInit() {
    // Ensure we don’t animate on load unless in view
    this.onScroll();
  }

  private animateCardsSequentially() {
    this.features.forEach((_, index) => {
      setTimeout(() => {
        if (this.cardStates[index] === 'hidden') {
          this.cardStates[index] = 'visible';
        }
      }, index * 500); // 0.5s stagger delay per card
    });
  }
}
