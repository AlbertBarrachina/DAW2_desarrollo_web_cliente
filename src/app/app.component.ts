import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UF3_Validation';

  constructor(
    private router: Router
  ) {
  }

}
