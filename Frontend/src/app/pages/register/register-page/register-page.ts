import { Component } from '@angular/core';
import { FormRegisterComponent } from "../form-register-component/form-register-component";
import { AuthService } from '../../../services/Auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [FormRegisterComponent],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {

  constructor(private readonly authService: AuthService, private readonly router: Router) { }


  onUserRegister(event: { name: string; email: string; password: string }) {
    const userData = {
      fullName: event.name,
      email: event.email,
      password: event.password,
    };

    this.authService.register(userData).subscribe({
      next: (response) => {
        console.log("Registro exitoso: ", response)
        this.router.navigate(['/'])
      },
      error: (error) => {
        console.error("Error del registro: ", error);
      }
    })
  }
}
