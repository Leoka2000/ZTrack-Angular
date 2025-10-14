import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { ContactRootComponent } from '../../pages/contact-root/contact-root.component';

@Component({
  selector: 'app-contact-layout',
  standalone: true,
  imports: [ ContactRootComponent],
  template: `
    <main class="min-h-screen text-neutral-200 bg-neutral-900 flex flex-col">

      <app-contact-root ></app-contact-root>

    </main>
  `,
})
export class ContactLayoutComponent {}
