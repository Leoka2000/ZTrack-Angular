import { Component } from '@angular/core';
import { AboutRootComponent } from '../about-root/about-root.component';
import { AboutLayoutComponent } from "../../layouts/about-layout/about-layout.component";

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [AboutpageComponent, AboutLayoutComponent],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.scss'
})
export class AboutpageComponent {

}
