import { Component } from '@angular/core';
import {Foto} from "./models/foto.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoTutorial';
  categoria = "";

  fotos: Foto[] = [
    { id: 1, titulo: "Titulo 1", categoria: "Terror", imagen: "https://picsum.photos/200/300", descripcion: "Descripcion Foto 1", fecha: new Date(), precio: 23.4 },
    { id: 2, titulo: "Titulo 2", categoria: "Ciencia", imagen: "https://picsum.photos/200/200", descripcion: "Descripcion Foto 2", fecha: new Date() },
    { id: 3, titulo: "Titulo 3", categoria: "Comedia", imagen: "https://picsum.photos/200/150", descripcion: "Descripcion Foto 3", fecha: new Date() },
    { id: 4, titulo: "Titulo 4", categoria: "Drama", imagen: "https://picsum.photos/200/200", descripcion: "Descripcion Foto 4", fecha: new Date() },
    { id: 5, titulo: "Titulo 5", categoria: "Drama", imagen: "https://picsum.photos/300/200", descripcion: "Descripcion Foto 5", fecha: new Date() },
    { id: 6, titulo: "Titulo 6", categoria: "Terror", imagen: "https://picsum.photos/400/200", descripcion: "Descripcion Foto 6", fecha: new Date(), precio: 43 }
  ];

  conseguirCategorias(): string[] {
    const categorias = this.fotos.map(value => value.categoria);
    return categorias.filter((value: string, idx: number) => categorias.indexOf(value) == idx);
  }
  obtenerFotosPorCategoria(): Foto[] {
    return this.fotos.filter(value => (value.categoria.toLowerCase()).indexOf(this.categoria.toLowerCase()) != -1);
  }

  /* TODO:
     1- Crear componente Foto
     2- Pasar todo al componente Foto mediante @Input()
     3- Crear toda la logica de editar y guardar dentro del componente
     4- Crear evento @Output
     5- Manejar evento @Output en el app.component.ts
   */

     crearFoto(foto:Foto){
      console.log(foto);
      this.fotos.push(foto);
     }

}
