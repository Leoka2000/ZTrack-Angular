import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesComponent } from "../bg-shades/bg-shades.component";
import { BgShadesBottomComponent } from "../bg-shades-bottom/bg-shades-bottom.component";

@Component({
  selector: 'app-blog-hero-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, BgShadesComponent, BgShadesBottomComponent],
  templateUrl: './blog-hero-card.component.html',
})
export class BlogHeroCardComponent implements AfterViewInit {
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  goToBlog() {
    this.router.navigate(['/blog']);
  }

  ngAfterViewInit(): void {
    const card = this.el.nativeElement.querySelector('.blog-card');

    // Start hidden
    this.renderer.setStyle(card, 'opacity', '0');
    this.renderer.setStyle(card, 'transform', 'translateY(50px)');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
