import { NgIf, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgIf, NgStyle],
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  showMobileToggle = signal(false); // default false
isAtTop = signal(true); // true when at top of page

  constructor() {
    if (typeof window !== 'undefined') {
      // Detect mobile width
      this.showMobileToggle.set(window.innerWidth <= 768);

      window.addEventListener('resize', () => {
        this.showMobileToggle.set(window.innerWidth <= 768);
      });

      // Scroll listener
      // Detect scroll position
      window.addEventListener('scroll', () => {
        this.isAtTop.set(window.scrollY === 0);
      });
    }
  }
  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
