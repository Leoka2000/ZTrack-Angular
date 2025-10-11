import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { AboutHouseComponent } from './about-house/about-house.component';
import { ExpertiseComponent } from "./expertise/expertise.component";


@Component({
  selector: 'app-about-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, AboutHouseComponent, ExpertiseComponent],
  templateUrl: './about-root.component.html',
  styleUrl: './about-root.component.scss'
})
export class AboutRootComponent {

}
