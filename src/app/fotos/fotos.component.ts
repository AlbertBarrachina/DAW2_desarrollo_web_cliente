import {Component} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  photo: string;
}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent {

  isFormVisible:boolean = false;
  tiles: Tile[] = [
    {photo: 'https://picsum.photos/3000/1000', cols: 3, rows: 1},
    {photo: 'https://picsum.photos/1000/2000', cols: 1, rows: 2},
    {photo: 'https://picsum.photos/1000/1000', cols: 1, rows: 1},
    {photo: 'https://picsum.photos/2000/1000', cols: 2, rows: 1}
  ];

  maxCols: number = 4;

  toggleForm(){
    this.isFormVisible= !this.isFormVisible;
  }

  addNewPhoto(foto:Tile) {
    if(foto.cols>this.maxCols){
      foto.cols=this.maxCols;
    }
    this.tiles.push(foto);
  }

}
