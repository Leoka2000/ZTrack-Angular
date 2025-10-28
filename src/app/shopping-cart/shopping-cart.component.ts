import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { CartComponent } from '../pages/cart/cart.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ProductsListComponent, CartComponent ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

}
