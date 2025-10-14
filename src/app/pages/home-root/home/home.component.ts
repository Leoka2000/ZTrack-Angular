import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { HeroComponent } from '../../../hero/hero.component';
import { MissionComponent } from '../../../mission/mission.component';

import { FooterComponent } from '../../../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ContactCtaComponent } from '../contact-cta/contact-cta.component';
import { FarmImageAboutUsComponent } from '../farm-image-about-us/farm-image-about-us.component';
import { BgShadesComponent } from "../../../bg-shades/bg-shades.component";



@Component({
  selector: 'app-home',
  standalone: true,
imports: [NavbarComponent, HeroComponent, MissionComponent, ContactCtaComponent, FooterComponent, ProductsComponent, FarmImageAboutUsComponent, BgShadesComponent],
  templateUrl: './home.component.html',
 
})
export class HomeComponent {

}
