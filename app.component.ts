import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  _nombre: string = "";
  _num1: number = 0;
  _num2: number = 0;
  _num3: number = 0;
  _num4: number = 0;

  _nombre2: string = "";
  _num12: number = 0;
  _num22: number = 0;
  _num32: number = 0;
  _num42: number = 0;


  generarPersonaje(): void {
    let _nombres: string[] = ["Malkon", "Kepvan Whistle", "Ransa", "Barnipus", "Duendus", "Tolistorry", "Okla", "Odanti", "Anotolum", "Snakus", "Pida"];
    let numnombre = this.numeroAleatorio(_nombres.length);

    this._nombre = _nombres[numnombre];
    this._num1 = this.numeroAleatorio();
    this._num2 = this.numeroAleatorio();
    this._num3 = this.numeroAleatorio();
    this._num4 = this.numeroAleatorio();
  }

  numeroAleatorio(mayor?: number): number {
    return Math.floor(Math.random() * (mayor || 20));
  }

  guardarPersonaje(): void {
    this._nombre2 = this._nombre;
    this._num12 = this._num1;
    this._num22 = this._num2;
    this._num32 = this._num3;
    this._num42 = this._num4;
  }

}