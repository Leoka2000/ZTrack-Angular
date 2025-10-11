import { Component } from '@angular/core';
import { AboutpageComponent } from '../../pages/aboutpage/aboutpage.component';

@Component({
  selector: 'app-about-layout',
  standalone: true,
  imports: [AboutpageComponent],
  template: `
    <main class="min-h-screen flex flex-col items-center justify-center">
      <app-aboutpage></app-aboutpage>
    </main>
  `,
})
export class AboutLayoutComponent {}
