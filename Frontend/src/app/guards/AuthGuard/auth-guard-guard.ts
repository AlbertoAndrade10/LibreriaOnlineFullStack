// guards/auth.guard.ts
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/Auth/auth-service';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (this.authService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
    return false;
  }
}