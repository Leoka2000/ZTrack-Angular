import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-root/home/home.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },         // Default route → home
  { path: 'about', component: AboutpageComponent } // /about → About page
];
