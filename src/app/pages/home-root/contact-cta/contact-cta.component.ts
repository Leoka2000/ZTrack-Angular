import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, BgShadesComponent, MatIconModule],
  templateUrl: './contact-cta.component.html',
  styleUrls: ['./contact-cta.component.scss']
})
export class ContactCtaComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const card = this.el.nativeElement.querySelector('.contact-cta-card');

    // Start hidden and moved down
    this.renderer.setStyle(card, 'opacity', '0');
    this.renderer.setStyle(card, 'transform', 'translateY(50px)');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate in
          this.renderer.setStyle(card, 'opacity', '1');
          this.renderer.setStyle(card, 'transform', 'translateY(0)');
          this.renderer.setStyle(card, 'transition', 'opacity 0.7s ease-out, transform 0.7s ease-out');

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.8 });

    observer.observe(card);
  }
}
