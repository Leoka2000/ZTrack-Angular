import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html', // add ./ for clarity
  imports: [MatToolbarModule],
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  showMobileToggle = signal(false);

  menuItems = [
    { label: 'Home', icon: 'home', route: '/' },
    { label: 'Shop', icon: 'shopping_cart', route: '/shop' },
    { label: 'Services', icon: 'build', route: '/services' },
    { label: 'About', icon: 'info', route: '/about' },
    { label: 'Contact', icon: 'contact_mail', route: '/contact' },
  ];
}
