import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';


@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, BgShadesComponent],
  templateUrl: './contact-cta.component.html',
  styleUrls: ['./contact-cta.component.scss']
})
export class ContactCtaComponent {
  constructor() {}
}