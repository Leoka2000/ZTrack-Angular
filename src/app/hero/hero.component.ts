import { Component } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import { CartButtonComponent } from '../cart-buttton/cart-buttton.component';
import { MatIcon } from "@angular/material/icon";
import { BgShadesComponent } from "../bg-shades/bg-shades.component";


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButton, MatIconButton, CartButtonComponent, MatIcon, BgShadesComponent, ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
