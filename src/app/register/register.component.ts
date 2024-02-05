import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from 'src/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
@Output() RegistrarEvent: EventEmitter<User> = new EventEmitter<User>();
  RegisterForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeat_password: new FormControl('', [Validators.required])
  });

  Registrar(){
    this.RegistrarEvent.emit(this.RegisterForm.value);
  }
}
