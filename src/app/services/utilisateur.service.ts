import { Injectable } from '@angular/core';
import { Utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private utilisateurs : Utilisateur[] = [];

  constructor() { }

  getUtilisateurs() {
    return this.utilisateurs;
  }

  addUtilisateur(utilisateur : Utilisateur) {
    this.utilisateurs.push(utilisateur);
  }

  exists(utilisateur : Utilisateur) {
    return this.utilisateurs.some(u =>
      u.username == utilisateur.username
      && u.password == utilisateur.password
    );
  }

  already_created(username : string) {
    return this.utilisateurs.some(u => u.username == username);
  }
}
