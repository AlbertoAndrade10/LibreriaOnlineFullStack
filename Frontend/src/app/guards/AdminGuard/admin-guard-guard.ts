// guards/admin.guard.ts
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/Auth/auth-service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
        return true;
      } else {
        if (!this.authService.isAuthenticated()) {
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/']);
        }
        return false;
      }
    }
    return false;
  }
}