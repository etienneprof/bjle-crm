import { Adresse } from "./adresse";
import { Contact } from "./contact";

export interface Client {
    id: number;
    raison_sociale: string;
    ref_interne: string;
    siren: string;
    tva_intracommunautaire: string;
    adresse: Adresse;
    contacts: Contact[];
}
