import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BgShadesComponent } from "../../../bg-shades/bg-shades.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-house',
  standalone: true,
  imports: [BgShadesComponent, TranslateModule],
  templateUrl: './about-house.component.html',
  styleUrls: ['./about-house.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('800ms ease-out')),
    ]),
  ],
})
export class AboutHouseComponent implements AfterViewInit {
  sectionStates: ('hidden' | 'visible')[] = [];

  constructor(private el: ElementRef) {
    this.sectionStates = new Array(2).fill('hidden');
  }

  ngAfterViewInit() {
    this.animateSectionsSequentially();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const section = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (section.top < windowHeight - 100 && section.bottom > 0) {
      this.animateSectionsSequentially();
    }
  }

  private animateSectionsSequentially() {
    this.sectionStates.forEach((state, index) => {
      setTimeout(() => {
        if (this.sectionStates[index] === 'hidden') {
          this.sectionStates[index] = 'visible';
        }
      }, index * 500);
    });
  }
}
