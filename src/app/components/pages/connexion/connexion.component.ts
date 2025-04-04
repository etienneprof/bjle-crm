import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveNavbarService } from '../../../services/reactive-navbar.service';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private service: UtilisateurService,
    private refreshService: ReactiveNavbarService,
    private router: Router
  ) {}

  connecter() {
    let user = {username: this.username, password: this.password};
    if (this.service.exists(user)) {
      sessionStorage.setItem("user", JSON.stringify(user));
      this.refreshService.refresh();
      this.router.navigate(["/accueil"])
    } else {
      this.message = "Identifiant ou mot de passe incorrect.";
    }
  }
}
