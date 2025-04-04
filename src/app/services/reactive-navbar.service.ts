import { Injectable } from '@angular/core';
import { NavbarComponent } from '../components/global/navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class ReactiveNavbarService {
  component ?: NavbarComponent;

  constructor() { }

  register(component : NavbarComponent) {
    this.component = component;
  }

  refresh() {
    this.component?.refresh();
  }
}
