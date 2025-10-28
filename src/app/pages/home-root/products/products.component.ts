import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BgShadesComponent, MatButtonModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const image = this.el.nativeElement.querySelector('.product-image');
    const contentChildren = Array.from(
      this.el.nativeElement.querySelectorAll('.right-content p, .right-content p strong, .right-content button, .right-content .pt-4 button')
    );

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate image first (from bottom)
          this.renderer.setStyle(image, 'opacity', '1');
          this.renderer.setStyle(image, 'transform', 'translateY(0)');
          this.renderer.setStyle(image, 'transition', 'opacity 0.7s ease-out, transform 0.7s ease-out');

          // Animate right content children staggered (from bottom)
          contentChildren.forEach((child, index) => {
            setTimeout(() => {
              this.renderer.setStyle(child, 'opacity', '1');
              this.renderer.setStyle(child, 'transform', 'translateY(0)');
              this.renderer.setStyle(child, 'transition', 'opacity 0.7s ease-out, transform 0.7s ease-out');
            }, (index + 1) * 200); // 0.2s stagger per element
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.8 });

    observer.observe(this.el.nativeElement);
  }
}
