import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home-root/home/home.component';
import { AboutRootComponent } from './pages/about-root/about-root.component';
import { ContactRootComponent } from './pages/contact-root/contact-root.component';
import { ShoppingCartRootComponent } from './pages/shopping-cart-root/shopping-cart-root/shopping-cart-root.component';


import { ProductsListComponent } from '../app/products-list/products-list.component';
import { CartComponent } from '../app/pages/cart/cart.component';
import { BlogRootComponent } from './pages/blog-root/blog-root.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutRootComponent },
  { path: 'contact', component: ContactRootComponent },
  { path: 'shop', component: ShoppingCartRootComponent },
  { path: 'blog', component: BlogRootComponent },

  { path: 'products', component: ProductsListComponent },
  { path: 'cart', component: CartComponent },
];
