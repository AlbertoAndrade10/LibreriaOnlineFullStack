import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/Auth/auth-service';
import { AuthStateService } from '../../../../services/Auth/AuthState/auth-state-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth-buttons-component',
  imports: [RouterLink],
  templateUrl: './auth-buttons-component.html',
  styleUrl: './auth-buttons-component.css'
})
export class AuthButtonsComponent implements OnInit {

  isLoggedInState: boolean = false;
  private subscription = new Subscription();

  constructor(
    private readonly authService: AuthService,
    private authStateService: AuthStateService
  ) { }

  ngOnInit(): void {
    this.updateAuthState();

    this.subscription.add(
      this.authStateService.authState$.subscribe(isAuthenticated => {
        this.isLoggedInState = isAuthenticated;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateAuthState(): void {
    this.isLoggedInState = this.authService.isAuthenticated();
  }
}
