import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-farm-image-about-us',
  standalone: true,
  imports: [MatIconModule, BgShadesComponent, RouterLink, MatButtonModule],
  templateUrl: './farm-image-about-us.component.html',
  styleUrls: ['./farm-image-about-us.component.scss']
})
export class FarmImageAboutUsComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const leftContent = this.el.nativeElement.querySelector('.left-content');
    const rightImage = this.el.nativeElement.querySelector('.right-image');

    const children = Array.from(leftContent.querySelectorAll('p, h1, a')); // all tags to animate
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate each child with staggered delay
            children.forEach((child, index) => {
              setTimeout(() => {
                this.renderer.setStyle(child, 'opacity', '1');
                this.renderer.setStyle(child, 'transform', 'translateY(0)');
                this.renderer.setStyle(child, 'transition', 'opacity 0.7s ease-out, transform 0.7s ease-out');
              }, index * 300); // 0.3s between each child
            });

            // Animate right image last, after all left content
            setTimeout(() => {
              this.renderer.setStyle(rightImage, 'opacity', '1');
              this.renderer.setStyle(rightImage, 'transform', 'translateY(0)');
              this.renderer.setStyle(rightImage, 'transition', 'opacity 0.7s ease-out, transform 0.7s ease-out');
            }, children.length * 300 + 300); // extra 0.3s after last left child

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(this.el.nativeElement);
  }
}
