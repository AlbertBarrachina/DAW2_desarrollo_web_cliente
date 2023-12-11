import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea-model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea:Tarea;
  constructor() { 
    this.tarea = { lista: "", img: "", titulo: "", usuarios: [], fechaFin: new Date()};
  }

  ngOnInit(): void {
  }

}
