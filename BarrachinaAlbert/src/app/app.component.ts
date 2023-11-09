import { Component } from '@angular/core';
import { Personaje } from './personaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen';
  personajes: Personaje[] = [new Personaje, new Personaje, new Personaje, new Personaje];

}
