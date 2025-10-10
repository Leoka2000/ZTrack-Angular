import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutpageComponent }
];
