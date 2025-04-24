import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule, CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private service: UtilisateurService,
    private toast_service: ToastService,
    private router: Router
  ) {}

  inscrire() {
    if (this.service.already_created(this.username)) {
      this.message = "Cet utilisateur existe déjà.";
    } else {
      this.service.addUtilisateur({username : this.username, password : this.password});
      this.toast_service.show(`Utilisateur \"${this.username}\" créé.`, 2000);
      this.router.navigate(["/connexion"]);
    }
  }
}
