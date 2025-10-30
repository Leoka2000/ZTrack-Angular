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

import { BgShadesBottomComponent } from "../../../bg-shades-bottom/bg-shades-bottom.component";
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
  MatButtonModule,
    BgShadesComponent,
    BgShadesBottomComponent,
    TranslateModule
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
     card: '1',
    },
    {
      card: '2',
      
    },
    {
      card: '3',
      
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
