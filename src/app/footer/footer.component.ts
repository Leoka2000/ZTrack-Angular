
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDividerModule, NgFor],
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
    { icon: 'facebook', text: '+36 30 299 7777', link: 'ZaneSystems' },
    { icon: 'twitter', text: '+36 30 299 7777', link: 'ZaneSystems' },
    { icon: 'linkedin', text: '+36 30 299 7777', link: 'Zane systems Kft.' }
  ];

  socialLinks = [
    { icon: 'facebook', label: 'ZaneSystems', url: '#' },
    { icon: 'twitter', label: 'ZaneSystems', url: '#' },
    { icon: 'linkedin', label: 'Zane systems Kft.', url: '#' }
  ];

  currentYear = new Date().getFullYear();

  constructor() {}
}

