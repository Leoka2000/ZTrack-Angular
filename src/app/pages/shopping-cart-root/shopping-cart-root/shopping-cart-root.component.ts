import { Component } from '@angular/core';
import { ShoppingCartComponent } from '../../../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-shopping-cart-root',
  standalone: true,
  imports: [ShoppingCartComponent],
  templateUrl: './shopping-cart-root.component.html',
  styleUrl: './shopping-cart-root.component.scss'
})
export class ShoppingCartRootComponent {

}
