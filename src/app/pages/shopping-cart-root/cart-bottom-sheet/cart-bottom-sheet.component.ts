import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatListModule, MatDividerModule],
  templateUrl: './cart-bottom-sheet.component.html',
  styleUrls: ['./cart-bottom-sheet.component.scss'],
})
export class CartBottomSheetComponent {
   private _bottomSheetRef = inject(MatBottomSheetRef<CartBottomSheetComponent>);

  @Input() products: CartProduct[] = [];

  // ✅ Add one more unit of the selected product
  addItem(product: CartProduct): void {
    product.quantity++;
  }

  // ✅ Remove one unit (cannot go below 1)
  removeItem(product: CartProduct): void {
    if (product.quantity > 1) product.quantity--;
  }

  // ✅ Delete the product from the list
  deleteItem(product: CartProduct): void {
    this.products = this.products.filter((p) => p.id !== product.id);
  }

  // ✅ Compute total dynamically
  get total(): number {
    return this.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }

  // ✅ Close bottom sheet
  close(): void {
    this._bottomSheetRef.dismiss();
  }
}
