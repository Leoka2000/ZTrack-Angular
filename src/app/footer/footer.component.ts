
import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgFor, NgClass } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { BgShadesComponent } from '../bg-shades/bg-shades.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDividerModule, NgFor, NgClass, BgShadesComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navigationLinks = [
    { label: 'Homepage', route: '/' },
    { label: 'Shop', route: '/shop' },
    { label: 'About us', route: '/about' },
    { label: 'Blog', route: '/blog' },
    { label: 'Support', route: '/support' },
    { label: 'Map Application', route: '/map' }
  ];

  informationLinks = [
    { label: 'Privacy Policy', route: '/privacy' },
    { label: 'Terms & Conditions', route: '/terms' },
    { label: 'Certification', route: '/certification' },
    { label: 'Quality Policy', route: '/quality' }
  ];

  contactInfo = [
    { icon: 'location_on', text: '4521 Hajdúsámson, Heveder utca 19.', link:'https://zane.hu/' },
    { icon: 'email', text: 'sales@zane.hu', link: 'mailto:sales@zane.hu' },
    { icon: 'phone', text: '+36 30 299 7777', link: 'tel:+36302997777' },
    { icon: 'facebook', text: 'ZaneSystems', link:'https://www.facebook.com/ZaneSystems'  },
    { icon: 'linkedin', text: 'Twitter / X - Zane systems Kft.', link: 'https://x.com/ZaneSystems/status/1293160922815447040' }
  ];

 
  currentYear = new Date().getFullYear();

    constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'facebook-custom',
      this.sanitizer.bypassSecurityTrustResourceUrl('images/twitter-icon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin-custom',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    );
  }
}

