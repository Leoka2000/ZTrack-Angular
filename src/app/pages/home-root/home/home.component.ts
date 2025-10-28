import { Component } from '@angular/core';

import { HeroComponent } from '../../../hero/hero.component';
import { MissionComponent } from '../mission/mission.component';


import { ProductsComponent } from '../products/products.component';
import { ContactCtaComponent } from '../contact-cta/contact-cta.component';
import { FarmImageAboutUsComponent } from '../farm-image-about-us/farm-image-about-us.component';
import { BgShadesComponent } from "../../../bg-shades/bg-shades.component";
import { BlogHeroCardComponent } from '../../../blog-hero-card/blog-hero-card.component';



@Component({
  selector: 'app-home',
  standalone: true,
imports: [ HeroComponent, MissionComponent, ContactCtaComponent,  ProductsComponent, FarmImageAboutUsComponent, BgShadesComponent, BlogHeroCardComponent],
  templateUrl: './home.component.html',
 
})
export class HomeComponent {

}
