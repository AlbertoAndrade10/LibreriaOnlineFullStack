import { Component } from '@angular/core';
import { FormLoginComponent } from "../form-login-component/form-login-component";

@Component({
  selector: 'app-login-page',
  imports: [FormLoginComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  onLogin(credentials: { email: string; password: string }) {
    console.log('Credenciales recibidas:', credentials);
    // Aquí puedes llamar a un servicio de autenticación
  }
}
