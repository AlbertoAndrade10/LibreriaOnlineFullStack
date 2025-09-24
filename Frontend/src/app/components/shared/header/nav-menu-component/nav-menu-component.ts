import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/Auth/auth-service';


@Component({
  selector: 'app-nav-menu-component',
  imports: [RouterLink],
  templateUrl: './nav-menu-component.html',
  styleUrl: './nav-menu-component.css'
})
export class NavMenuComponent {
  @Output() close = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  logout(): void {
    this.authService.logout();
    this.close.emit();
  }

  closeMenu(): void {
    this.close.emit();
  }
}
