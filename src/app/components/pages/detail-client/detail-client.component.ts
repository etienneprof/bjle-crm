import { Component, OnInit } from '@angular/core';
import { Client } from '../../../interfaces/client';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { CarteContactComponent } from "./carte-contact/carte-contact.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-client',
  imports: [CarteContactComponent, CommonModule],
  templateUrl: './detail-client.component.html',
  styleUrl: './detail-client.component.css'
})
export class DetailClientComponent implements OnInit {
  client?: Client;

  constructor(private route: ActivatedRoute, private service: ClientService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id_param = params.get("id");
      if (id_param) {
        let id = Number.parseInt(id_param);
        this.client = this.service.getClientById(id);
      }
    });
  }
}
