import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardImage } from "@angular/material/card";

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBadgeModule, MatCardImage],
  template: `
    <button style="display: flex; margin:1.5rem; border-radius:24px"
      mat-raised-button
      aria-label="Shopping Cart" 
      color="primary" 
      matBadge="-40%"
      matBadgeColor="accent"
      matBadgeOverlap="true"
   
    >
    Expore our products
      <mat-icon>shopping_cart</mat-icon>
    </button>
  `,
})
export class CartButtonComponent {}
