import { NgIf, NgFor, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgIf, NgFor, NgStyle],
})
export class NavbarComponent {
  // Signals
  isMenuOpen = signal(false);        // Mobile menu open/close
  showMobileToggle = signal(false);  // Show mobile toggle button
  isAtTop = signal(true);            // Detect scroll position

  // Menu items
  menuItems = [
    { label: 'Home', icon: 'home', route: '/' },
    { label: 'Shop', icon: 'shopping_cart', route: '/shop' },
    { label: 'Services', icon: 'build', route: '/services' },
    { label: 'About', icon: 'info', route: '/about' },
    { label: 'Contact', icon: 'contact_mail', route: '/contact' },
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      // Detect mobile width
      this.showMobileToggle.set(window.innerWidth <= 768);

      window.addEventListener('resize', () => {
        this.showMobileToggle.set(window.innerWidth <= 768);
      });

      // Detect scroll position
      window.addEventListener('scroll', () => {
        this.isAtTop.set(window.scrollY === 0);
      });
    }
  }

  // Toggle mobile menu
  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
