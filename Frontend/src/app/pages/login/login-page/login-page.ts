import { Component } from '@angular/core';
import { FormLoginComponent } from "../form-login-component/form-login-component";
import { AuthService } from '../../../services/Auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormLoginComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  constructor(private readonly authService: AuthService, private router: Router) { }
  onLogin(credentials: { email: string; password: string }) {
    console.log('Credenciales recibidas:', credentials);

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log("Login exitoso", response);
        this.authService.setToken(response.token)
        this.router.navigate(['/'])
      },
      error: (error) => {
        console.error("Error en el login: ", error);
      }
    })


  }
}
