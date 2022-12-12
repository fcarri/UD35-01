import { Component, Input } from '@angular/core';
import { Client } from '../models/client';


@Component({
  selector: 'app-llista',
  templateUrl: './llista.component.html',
  styleUrls: ['./llista.component.css']
})
export class LlistaComponent {
  @Input() llista : any;

  constructor(){}
}
