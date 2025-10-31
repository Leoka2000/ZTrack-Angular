import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactOverallComponent } from "./contact-overall/contact-overall.component";
import { ZaneMapComponent } from './zane-map/zane-map.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-root',
  standalone: true,
  imports: [ZaneMapComponent, ContactOverallComponent, TranslateModule],
  templateUrl: './contact-root.component.html',
  styleUrl: './contact-root.component.scss'
})
export class ContactRootComponent {

}
