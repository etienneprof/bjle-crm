import { Component, DoCheck, OnChanges } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../interfaces/client';
import { CarteClientComponent } from "./carte-client/carte-client.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  imports: [CarteClientComponent, CommonModule, FormsModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements DoCheck {
  clients: Client[];
  recherche: string = "";

  constructor(private service: ClientService) {
    this.clients = service.getClients();
  }

  ngDoCheck(): void {
    this.clients = this.service.getClients()
      .filter(c => c.raison_sociale.toLowerCase().includes(this.recherche.toLowerCase())
                || c.ref_interne.toLowerCase().includes(this.recherche.toLowerCase()));
  }
}
