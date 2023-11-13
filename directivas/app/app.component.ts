import { Component } from '@angular/core';
import { dia } from './dia';
import { mes } from './mes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendario';
  diasNombres: String[] = ["L","M","X","J","V","S","D"];

  constructor() {

  }

}