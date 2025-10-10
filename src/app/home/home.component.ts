import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { MissionComponent } from '../mission/mission.component';
import { ContactCtaComponent } from '../contact-cta/contact-cta.component';
import { FooterComponent } from '../footer/footer.component';
import { CartButtonComponent } from '../cart-buttton/cart-buttton.component';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-home',
  standalone: true,
imports: [NavbarComponent, HeroComponent, MissionComponent, MissionComponent, ContactCtaComponent, FooterComponent, ProductsComponent],
  templateUrl: './home.component.html',
 
})
export class HomeComponent {

}
