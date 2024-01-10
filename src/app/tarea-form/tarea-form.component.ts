import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../models/tarea-model';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  @Input() listas: string[] = [];
  @Input() tarea: Tarea | null;
  @Output() guardarCambios : EventEmitter<Tarea> = new EventEmitter<Tarea>();

  constructor() {
    this.tarea = {id: 0, lista: "", img: "", titulo: "", usuarios: [], fechaFin: new Date() };
  }

  ngOnInit(): void {
  }

  formularioToggle(){
    this.guardarCambios.emit();
  }
}
