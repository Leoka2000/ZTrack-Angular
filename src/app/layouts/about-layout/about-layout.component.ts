import { Component } from '@angular/core';
import { AboutpageComponent } from '../../pages/aboutpage/aboutpage.component';
import { AboutRootComponent } from "../../pages/about-root/about-root.component";

@Component({
  selector: 'app-about-layout',
  standalone: true,
  imports: [AboutRootComponent],
  template: `
    <main
      class="min-h-screen text-neutral-200 bg-neutral-900 flex flex-col items-center justify-center"
    >
     <app-about-root></app-about-root>
    </main>
  `,
})
export class AboutLayoutComponent {}
