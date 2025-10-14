import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-root/home/home.component';

import { AboutRootComponent } from './pages/about-root/about-root.component';
import { ContactRootComponent } from './pages/contact-root/contact-root.component';
import { ShoppingCartRootComponent } from './pages/shopping-cart-root/shopping-cart-root/shopping-cart-root.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route → home
  { path: 'about', component: AboutRootComponent },
  { path: 'contact', component: ContactRootComponent },
    { path: 'shop', component: ShoppingCartRootComponent },
  // /about → About page
];
