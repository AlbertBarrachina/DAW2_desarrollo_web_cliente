import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  @Input() listas: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
