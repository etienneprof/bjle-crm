import { Component, Input } from '@angular/core';
import { Contact } from '../../../../interfaces/contact';

@Component({
  selector: 'app-carte-contact',
  imports: [],
  templateUrl: './carte-contact.component.html',
  styleUrl: './carte-contact.component.css'
})
export class CarteContactComponent {
  @Input()
  contact?: Contact;
}
