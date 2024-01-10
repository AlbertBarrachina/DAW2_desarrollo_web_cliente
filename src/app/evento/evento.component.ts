import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evento } from '../models/evento.model';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  @Input() evento:Evento;
  @Output() guardarCambios: EventEmitter<Evento> = new EventEmitter<Evento>();
  editando: boolean = false;

  constructor(){
    this.evento = { titulo: "", artista: "", direccion: "", fecha: new Date(), precio: 0 };
  }
  cambiarEdicion() {
    if (this.editando) {
      this.guardarCambios.emit(this.evento);
    }

    this.editando = !this.editando; 
  }
}