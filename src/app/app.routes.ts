import { Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { ClientsComponent } from './components/pages/clients/clients.component';
import { DetailClientComponent } from './components/pages/detail-client/detail-client.component';
import { ConnexionComponent } from './components/pages/connexion/connexion.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';

export const routes: Routes = [
    {path: 'accueil', component: AccueilComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'client/:id', component: DetailClientComponent},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: '**', redirectTo: '/accueil'}
];
