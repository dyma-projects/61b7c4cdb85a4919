import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  template: `
    <input [value]="nom" (change)='copier($event.target.value)'>
    <h1>{{nom}}</h1>
  `,
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  nom: string = "Marc"

  constructor() { }

  ngOnInit(): void {
  }

  copier(name: string) {
    this.nom = name;
  }

}
