import { Component } from '@angular/core';
import { BlogRootComponent } from '../../pages/blog-root/blog-root.component';


@Component({
  selector: 'app-blog-layout',
  standalone: true,
  imports: [BlogRootComponent],
  template: `
    <main
      class="min-h-screen text-neutral-200 bg-neutral-900 flex flex-col items-center"
    >
      <app-blog-root></app-blog-root>
    </main>
  `,
})
export class BlogLayoutComponent {}
