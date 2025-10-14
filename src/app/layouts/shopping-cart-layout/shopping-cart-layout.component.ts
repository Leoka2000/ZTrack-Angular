import { Component } from '@angular/core';
import { ShoppingCartRootComponent } from '../../pages/shopping-cart-root/shopping-cart-root/shopping-cart-root.component';

@Component({
  selector: 'app-shopping-cart-layout',
  standalone: true,
  imports: [ShoppingCartRootComponent],
  template: `
    <main class="min-h-screen text-neutral-200 bg-neutral-900 flex flex-col">
      <app-shopping-cart-root></app-shopping-cart-root>
    </main>
  `,
})
export class ShoppingCartLayoutComponent {}
