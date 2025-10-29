import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesComponent } from "../../../bg-shades/bg-shades.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [MatIconModule, BgShadesComponent, MatButtonModule],
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('800ms ease-out')),
    ]),
  ],
})
export class ExpertiseComponent implements AfterViewInit {
  cardStates: ('hidden' | 'visible')[] = [];

  constructor(private el: ElementRef) {
    this.cardStates = new Array(5).fill('hidden');
  }

  ngAfterViewInit() {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const section = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (section.top < windowHeight - 100 && section.bottom > 0) {
      this.animateCardsSequentially();
    }
  }

  private animateCardsSequentially() {
    this.cardStates.forEach((_, index) => {
      setTimeout(() => {
        if (this.cardStates[index] === 'hidden') {
          this.cardStates[index] = 'visible';
        }
      }, index * 500);
    });
  }
}
