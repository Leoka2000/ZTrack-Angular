import { Component } from '@angular/core';
import { ContactRootComponent } from '../../pages/contact-root/contact-root.component';

@Component({
  selector: 'app-contact-layout',
  standalone: true,
  imports: [ContactRootComponent],
  template: `
    <main
      class="min-h-screen text-neutral-200 bg-neutral-900 flex flex-col items-center justify-center"
    >
      <app-contact-root></app-contact-root>
    </main>
  `,
})
export class ContactLayoutComponent {}
