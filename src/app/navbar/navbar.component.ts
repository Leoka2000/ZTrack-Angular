import { NgIf, NgFor, NgStyle, CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DemoComponent } from "../demo/demo.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [
    MatButtonModule,
    MatIconModule,
    NgIf,
    NgFor,
    NgStyle,
    RouterLink,
    DemoComponent,
    TranslateModule
  ],
})
export class NavbarComponent {

  isMenuOpen = signal(false);       
  showMobileToggle = signal(false);  

  // Menu items with translation keys
  menuItems = [
    { key: 'navbar.HOME', icon: 'home', route: '/' },
    { key: 'navbar.SHOP', icon: 'shopping_cart', route: '/shop' },
    { key: 'navbar.ABOUT', icon: 'info', route: '/about' },
    { key: 'navbar.CONTACT', icon: 'contact_mail', route: '/contact' },
    { key: 'navbar.BLOG', icon: 'article_person', route: '/blog' },
  ];

  toggleIcon = computed(() => (this.isMenuOpen() ? 'close' : 'menu'));

  constructor(private translate: TranslateService) {
    if (typeof window !== 'undefined') {
      this.showMobileToggle.set(window.innerWidth <= 768);
      window.addEventListener('resize', () => {
        this.showMobileToggle.set(window.innerWidth <= 768);
      });

      // Restore language from localStorage (browser only)
      const savedLang = localStorage.getItem('lang');
      if (savedLang) {
        this.translate.use(savedLang);
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }
}
