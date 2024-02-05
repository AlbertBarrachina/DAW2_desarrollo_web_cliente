import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeat_password: new FormControl('', [Validators.required])
  });
  authService: any;
  constructor(private http: HttpClient) {

  }
  Registrar() {
    const userData = this.RegisterForm.value;
    const apiUrl = 'https://reques.in/api/register';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    this.authService.registerUser(userData).subscribe(
      (response: any) => {
        console.log('Registration successful:', response);
        // Handle success (optional)
      },
      (error: any) => {
        console.error('Registration failed:', error);
        // Handle error (optional)
      }
    );
    return this.http.post(apiUrl, userData, { headers });
  }
}
