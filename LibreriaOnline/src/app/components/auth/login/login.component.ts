import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = ''
  password: string = ''
  rememberMe: boolean = false;

  onSubmit() {
    console.log('Login data:', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });

    //logica
  }
}
