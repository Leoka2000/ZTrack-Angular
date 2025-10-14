import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactOverallComponent } from "./contact-overall/contact-overall.component";

@Component({
  selector: 'app-contact-root',
  standalone: true,
  imports: [ContactFormComponent, ContactOverallComponent],
  templateUrl: './contact-root.component.html',
  styleUrl: './contact-root.component.scss'
})
export class ContactRootComponent {

}
