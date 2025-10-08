import { Component, signal, HostListener, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = signal(false);
  showMobileToggle = signal(false); // start as false

  cartCount = signal(3);

  menuItems = [
    { label: 'Home', icon: 'home', route: '/' },
    { label: 'Shop', icon: 'shopping_cart', route: '/shop' },
    { label: 'Services', icon: 'build', route: '/services' },
    { label: 'About', icon: 'info', route: '/about' },
    { label: 'Contact', icon: 'contact_mail', route: '/contact' },
  ];

  ngOnInit() {
    this.checkScreenWidth(); // ← set mobile toggle on init
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  addToCart(amount: number = 1) {
    this.cartCount.update(v => v + amount);
  }

  removeFromCart(amount: number = 1) {
    this.cartCount.update(v => Math.max(0, v - amount));
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    const width = window.innerWidth;
    // Show toggle button only on small screens (<768px)
    this.showMobileToggle.set(width < 768);

    // Close mobile menu automatically if switching to desktop
    if (width >= 768 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }
}
