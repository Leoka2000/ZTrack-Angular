import { Component } from '@angular/core';
import { BgShadesComponent } from "../../../bg-shades/bg-shades.component";

@Component({
  selector: 'app-about-house',
  standalone: true,
  imports: [BgShadesComponent],
  templateUrl: './about-house.component.html',
  styleUrl: './about-house.component.scss'
})
export class AboutHouseComponent {
companyInfo = {
    name: 'ZANE systems Limited Liability',
    foundedYear: '2012',
    founder: 'Zoltán Erdei',
    mainActivity: 'production of electronic circuit board and electronic design',
    mission: 'to show that Hungarian electronics professionals can stand their ground not only in electronics contract manufacturing, but also in design.',
    imageUrl: 'assets/images/zane-building.jpg' // Update this path to your actual image
  };

}
