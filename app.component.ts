import { Component } from '@angular/core';

interface Character {
  name: string;
  strength: number;
  agility: number;
  intelligence: number;
  life: number;
  editable: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverCharacters: Character[] = [];
  character_info: String = "";

  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"name": "Jugger", "strength": 18, "agility": 12, "intelligence": 6, "life": 30, "editable": false },
      {"name": "Pelegrin", "strength": 20, "agility": 8, "intelligence": 6, "life": 40, "editable": false },
      {"name": "Dorthak", "strength": 12, "agility": 18, "intelligence": 10, "life": 16, "editable": false },
      {"name": "Kharak", "strength": 8, "agility": 20, "intelligence": 12, "life": 14, "editable": false },
      {"name": "Perz", "strength": 10, "agility": 6, "intelligence": 20, "life": 10, "editable": false }
    ]`;

    // Parseamos la información y la convertimos directamente en un array de "Character"
    this.serverCharacters = JSON.parse(serverJson);
  }

  //cambia el estado de editable de false a true y al reves
  ToggleEdit(personaje: Character): void {
    if (personaje.editable) {
      personaje.editable = false;
    } else {
      personaje.editable = true;
    }
    this.mostrarPersonaje(personaje)
  }

  //muestra la info que se ha cambiado por pantalla
  public mostrarPersonaje(personaje: Character): void {
    this.character_info = JSON.stringify(personaje);
  }



}
