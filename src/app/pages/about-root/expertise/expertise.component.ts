import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesComponent } from "../../../bg-shades/bg-shades.component";
import { MatButtonModule } from "@angular/material/button";
@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [MatIconModule, BgShadesComponent, MatButtonModule],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class ExpertiseComponent {

}
