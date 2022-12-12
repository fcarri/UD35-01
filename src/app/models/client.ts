export class Client {
    nom: string;
    cif: string;
    direccio: string;
    grup: string;

    constructor(nom:string, cif:string, direccio:string,grup:string){
        this.nom = nom;
        this.cif = cif;
        this.direccio = direccio;
        this.grup = grup;
    }
}
