import {
  Component,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { MatButtonModule } from '@angular/material/button';
import { BgShadesComponent } from "../../../bg-shades/bg-shades.component";
import { BgShadesBottomComponent } from '../../../bg-shades-bottom/bg-shades-bottom.component';
import { MatRipple } from "@angular/material/core";

@Component({
  selector: 'app-contact-overall',
  standalone: true,
  imports: [
    MatIconModule,
    NgFor,
    ContactFormComponent,
    MatButtonModule,
    BgShadesComponent,
    BgShadesBottomComponent,
    MatRipple
  ],
  templateUrl: './contact-overall.component.html',
  styleUrls: ['./contact-overall.component.scss']
})
export class ContactOverallComponent implements AfterViewInit {

  contactItems = [
    {
      title: 'Phone',
      icon: 'phone',
      text: '+36 30 399 7777',
      link: 'tel:+36303997777',
    },
    {
      title: 'Email',
      icon: 'email',
      text: 'sales@zane.hu',
      link: 'mailto:sales@zane.hu',
    },
  ];

  socialLinks = [
    {
      icon: 'facebook',
      text: 'ZaneSystems',
      link: 'https://www.facebook.com/ZaneSystems',
    },
    {
      icon: 'close',
      text: 'ZaneSystems',
      link: 'https://twitter.com/ZaneSystems',
    },
    {
      icon: 'link',
      text: 'Zane systems Kft.',
      link: 'https://www.linkedin.com/company/zanesystems',
    },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
  const elements = this.el.nativeElement.querySelectorAll('.fade-section');

  elements.forEach((el: HTMLElement, index: number) => {
    this.renderer.setStyle(el, 'opacity', '0');
    this.renderer.setStyle(el, 'transform', 'translateY(50px)');
    this.renderer.setStyle(
      el,
      'transition',
      `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`
    );
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          this.renderer.setStyle(el, 'opacity', '1');
          this.renderer.setStyle(el, 'transform', 'translateY(0)');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el: any) => observer.observe(el));
}
}
