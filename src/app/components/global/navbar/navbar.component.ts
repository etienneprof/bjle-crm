import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Utilisateur } from '../../../interfaces/utilisateur';
import { CommonModule } from '@angular/common';
import { ReactiveNavbarService } from '../../../services/reactive-navbar.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user ?: Utilisateur;

  constructor(private router: Router, private service: ReactiveNavbarService) {
    this.service.register(this);
    this.refresh();
  }

  refresh() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.user = JSON.parse(user);
    } else {
      this.user = undefined;
    }
  }

  deconnecter() {
    sessionStorage.clear();
    this.refresh();
    this.router.navigate(["/accueil"]);
  }
}
