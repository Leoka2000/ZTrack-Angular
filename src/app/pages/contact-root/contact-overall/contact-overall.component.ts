import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-overall',
  standalone: true,
  imports: [MatIconModule, NgFor, ContactFormComponent],
  templateUrl: './contact-overall.component.html',
})
export class ContactOverallComponent {
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
      icon: 'twitter',
      text: 'ZaneSystems',
      link: 'https://twitter.com/ZaneSystems',
    },
    {
      icon: 'linkedin',
      text: 'Zane systems Kft.',
      link: 'https://www.linkedin.com/company/zanesystems',
    },
  ];
}
