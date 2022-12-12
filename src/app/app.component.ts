import { Component } from '@angular/core';
import { Client } from './models/client';
import { group } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UD35-01';
  nomClient: string = '';
  cifClient: string = '';
  direccioClient: string = '';
  grupClient: string = '';
  llista: Client[] | null = null;
  myArray = [1, 2, 3, 4, 5, 6];

  guardar(): void {
    const client: Client = {
      nom: this.nomClient,
      cif: this.cifClient,
      direccio: this.direccioClient,
      grup: this.grupClient,
    };


    if (this.llista == null) this.llista = [];
    this.llista.push(client);

    this.myArray.push(this.myArray.length + 1);

    console.log(this.myArray);
    alert(this.myArray)
    alert(this.nomClient)
  }



}
