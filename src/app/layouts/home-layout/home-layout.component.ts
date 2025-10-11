import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main class="min-h-screen relative flex flex-col">
      <app-home></app-home>
    </main>
  `,
})
export class HomeLayoutComponent {}
