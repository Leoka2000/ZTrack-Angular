import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BgShadesComponent } from "../../bg-shades/bg-shades.component";
import { BgShadesBottomComponent } from "../../bg-shades-bottom/bg-shades-bottom.component";

@Component({
  selector: 'app-blog-root',
  standalone: true,
  imports: [MatIconModule, BgShadesComponent, BgShadesBottomComponent],
  templateUrl: './blog-root.component.html',
  styleUrl: './blog-root.component.scss'
})
export class BlogRootComponent {

}
