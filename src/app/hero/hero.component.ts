import { Component } from '@angular/core';
import { MatButton, MatIconButton } from "@angular/material/button";
import { CartButtonComponent } from '../cart-buttton/cart-buttton.component';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButton, MatIconButton, CartButtonComponent, MatIcon],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
