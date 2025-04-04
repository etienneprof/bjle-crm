import { Component, Input } from '@angular/core';
import { Client } from '../../../../interfaces/client';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carte-client',
  imports: [CommonModule, RouterModule],
  templateUrl: './carte-client.component.html',
  styleUrl: './carte-client.component.css'
})
export class CarteClientComponent {
  @Input()
  client ?: Client;
}
