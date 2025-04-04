import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients : Client[] = [
    {
      id: 1,
      raison_sociale: "Client random",
      ref_interne: "Poule aux oeufs d'or",
      siren: "85203183000023",
      tva_intracommunautaire: "FR02852031830",
      adresse: {
        numero: 6,
        rue: "Rue Rose Dieng Kuntz",
        code_postal: "44 300",
        ville: "Nantes"
      },
      contacts: [
        {
          nom: "CASSIN",
          prenom: "Etienne",
          telephone: "0123456789",
          mail: "et.cassin@gmail.com"
        }
      ]
    },
    {
      id: 2,
      raison_sociale: "Client random 2",
      ref_interne: "Poule aux oeufs d'argent",
      siren: "85203183000023",
      tva_intracommunautaire: "FR02852031830",
      adresse: {
        numero: 2,
        rue: "Rue Alfred Kastler",
        code_postal: "44 300",
        ville: "Nantes"
      },
      contacts: [
        {
          nom: "BONNEAU",
          prenom: "Jean",
          telephone: "0123456789",
          mail: "jean.bonneau@gmail.com"
        },
        {
          nom: "CASSIN",
          prenom: "Marc",
          telephone: "0123456789",
          mail: "marc.cassin@gmail.com"
        }
      ]
    }
  ];

  constructor() { }

  getClients() {
    return this.clients;
  }

  addClient(client: Client) {
    this.clients.push(client);
  }

  getClientById(id: number) {
    return this.clients.find(c => c.id == id);
  }
}
