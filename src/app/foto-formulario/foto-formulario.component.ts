import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tile } from '../fotos/fotos.component';

@Component({
  selector: 'app-foto-formulario',
  templateUrl: './foto-formulario.component.html',
  styleUrls: ['./foto-formulario.component.css']
})
export class FotoFormularioComponent {
   FotoForm: FormGroup = new FormGroup({
     cols: new FormControl('', [Validators.required]),
     rows: new FormControl('', [Validators.required]),
     photo: new FormControl('', [Validators.required]),
   });
  @Output() CrearFoto: EventEmitter<Tile> = new EventEmitter<Tile>();
  @Output() ToggleForm: EventEmitter<any> = new EventEmitter<any>();
  //envia la nueva foto
  addNewPhoto() {
    this.CrearFoto.emit(this.FotoForm.value);
    this.ToggleForm.emit();
  }
  //cancela la creacion
  Cancelar(){
    this.ToggleForm.emit();
  }

}
