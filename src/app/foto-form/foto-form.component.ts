import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Foto } from '../models/foto.model';

@Component({
  selector: 'app-foto-form',
  templateUrl: './foto-form.component.html',
  styleUrls: ['./foto-form.component.css']
})
export class FotoFormComponent implements OnInit {
  @Output() nuevaFotoEvent: EventEmitter<Foto> = new EventEmitter<Foto>();
  fotoForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    descripcion: new FormControl(''),
    fecha: new FormControl('', [Validators.required]),
    precio: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  guardarFoto(){
    console.log(this.fotoForm.value);
    this.nuevaFotoEvent.emit(this.fotoForm.value);
  }

}