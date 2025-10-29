import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesBottomComponent } from '../../../bg-shades-bottom/bg-shades-bottom.component';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [BgShadesComponent, MatIconModule, BgShadesBottomComponent],
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('800ms ease-out')),
    ]),
  ],
})
export class TeamMembersComponent implements AfterViewInit {
  cardStates: ('hidden' | 'visible')[] = [];

  constructor(private el: ElementRef) {
    this.cardStates = new Array(3).fill('hidden');
  }

  ngAfterViewInit() {
    // Only checks scroll position initially
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const section = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Trigger only when the section enters the viewport
    if (section.top < windowHeight - 100 && section.bottom > 0) {
      this.animateCardsSequentially();
    }
  }

  private animateCardsSequentially() {
    this.cardStates.forEach((state, index) => {
      setTimeout(() => {
        if (this.cardStates[index] === 'hidden') {
          this.cardStates[index] = 'visible';
        }
      }, index * 500);
    });
  }
}
