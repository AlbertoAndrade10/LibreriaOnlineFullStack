import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-login-component.html',
  styleUrl: './form-login-component.css'
})
export class FormLoginComponent {

  loginForm;

  loginEvent = output<{ email: string; password: string }>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginEvent.emit({ email: email!, password: password! });
    } else {
      console.log('Formulario inválido');
    }
  }
}
