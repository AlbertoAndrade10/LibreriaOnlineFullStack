import { Router, CanActivate } from '@angular/router';

import { Injectable } from '@angular/core';

import { AuthService } from '../../services/Auth/auth-service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService, private readonly router: Router) {

  }
  canActivate(): boolean {

    if (this.authService.isAuthenticated()) {

      // if you're already authenticated, redirect to dashboard
      this.router.navigate(['/dashboard/administration-books']);
      return false;
    }
    return true;
  }
}
