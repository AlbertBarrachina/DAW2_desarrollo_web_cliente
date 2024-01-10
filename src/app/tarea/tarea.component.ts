import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea-model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea;
  @Input() listas: string[] = [];
  constructor() {
    this.tarea = {id: 0, lista: "", img: "", titulo: "", usuarios: [], fechaFin: new Date() };
  }

  ngOnInit(): void {
  }

  getClasse() {
    let currentDate = new Date().getTime();
    let tareaFechaFin = new Date(this.tarea?.fechaFin ?? currentDate).getTime();
    const isRojo = this.tarea.lista !== this.listas[2] && tareaFechaFin < currentDate;
    const isVerde = this.tarea.lista === this.listas[2] && tareaFechaFin < currentDate;
    const isNaranja = ((currentDate - tareaFechaFin) < 24 * 60 * 60 * 1000 && (currentDate - tareaFechaFin) > 0);
      
    return {
      'gris': true,
      'rojo': isRojo,
      'verde': isVerde,
      'naranja': isNaranja
    };
  }
  
}
