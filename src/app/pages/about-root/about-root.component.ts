import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { AboutHouseComponent } from './about-house/about-house.component';
import { ExpertiseComponent } from "./expertise/expertise.component";
import { BgShadesComponent } from "../../bg-shades/bg-shades.component";
import { TeamMembersComponent } from "./team-members/team-members.component";
import { BlogHeroCardComponent } from '../../blog-hero-card/blog-hero-card.component';
import { ContactCtaComponent } from "../home-root/contact-cta/contact-cta.component";
import { BgShadesBottomComponent } from "../../bg-shades-bottom/bg-shades-bottom.component";


@Component({
  selector: 'app-about-root',
  standalone: true,
  imports: [AboutHouseComponent, ExpertiseComponent, BgShadesComponent, TeamMembersComponent, BlogHeroCardComponent, ContactCtaComponent, BgShadesBottomComponent],
  templateUrl: './about-root.component.html',
  styleUrl: './about-root.component.scss'
})
export class AboutRootComponent {

}
