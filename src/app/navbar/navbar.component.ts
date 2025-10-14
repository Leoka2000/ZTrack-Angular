import { NgIf, NgFor, NgStyle } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [MatButtonModule, MatIconModule, NgIf, NgFor, NgStyle,RouterLink ],
})
export class NavbarComponent {
  // Signals
  isMenuOpen = signal(false);       
  showMobileToggle = signal(false);  

  // Menu items
  menuItems = [
    { label: 'Home', icon: 'home', route: '/' },
    { label: 'Shop', icon: 'shopping_cart', route: '/shop' },
    { label: 'Products', icon: 'build', route: '/services' },
    { label: 'About', icon: 'info', route: 'about' },
    { label: 'Contact', icon: 'contact_mail', route: '/contact' },
  ];
  toggleIcon = computed(() => (this.isMenuOpen() ? 'close' : 'menu'));
  constructor() {
    if (typeof window !== 'undefined') {
   
      this.showMobileToggle.set(window.innerWidth <= 768);

      window.addEventListener('resize', () => {
        this.showMobileToggle.set(window.innerWidth <= 768);
      });
    }
    
  }

  
  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
