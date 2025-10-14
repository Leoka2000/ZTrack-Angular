import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact-root',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-root.component.html',
  styleUrl: './contact-root.component.scss'
})
export class ContactRootComponent {

}
