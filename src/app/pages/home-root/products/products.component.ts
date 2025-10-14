import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesComponent } from '../../../bg-shades/bg-shades.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BgShadesComponent, MatButtonModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
