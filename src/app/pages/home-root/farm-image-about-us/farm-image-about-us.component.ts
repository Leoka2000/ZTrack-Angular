import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-farm-image-about-us',
  standalone: true,
  imports: [MatIconModule, BgShadesComponent, RouterLink, MatButtonModule],
  templateUrl: './farm-image-about-us.component.html',
  styleUrl: './farm-image-about-us.component.scss'
})
export class FarmImageAboutUsComponent {

}
