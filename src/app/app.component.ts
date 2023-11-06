import { Component } from '@angular/core';
import { Photo } from "./Photo";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title="validacion 1";
  fotos: Photo[] = [new Photo(), new Photo(), new Photo(), new Photo()];

}
