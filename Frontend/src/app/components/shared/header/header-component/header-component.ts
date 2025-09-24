import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { LogoComponent } from "../logo-component/logo-component";
import { AuthButtonsComponent } from "../auth-buttons-component/auth-buttons-component";
import { HamburgerButtonComponent } from "../hamburger-button-component/hamburger-button-component";
import { NavMenuComponent } from "../nav-menu-component/nav-menu-component";
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/Auth/auth-service';
import { isPlatformBrowser } from '@angular/common';
import { AuthStateService } from '../../../../services/Auth/AuthState/auth-state-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header-component',
  imports: [LogoComponent, AuthButtonsComponent, HamburgerButtonComponent, NavMenuComponent, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isMenuOpen: boolean = false;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  userName: string | null = null;
  private subscription = new Subscription();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService,
    private router: Router,
    private authStateService: AuthStateService
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateAuthStatus();

      this.subscription.add(
        this.authStateService.authState$.subscribe(() => {
          this.updateAuthStatus();
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateAuthStatus(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin();
    this.userName = this.authService.getCurrentUser();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.authService.logout();
      this.updateAuthStatus();
      this.router.navigate(['/']);
    }
  }

  getInitials(): string {
    if (this.userName) {
      const names = this.userName.split(' ');
      return names.map(n => n[0]).join('').toUpperCase().substring(0, 2);
    }
    return '';
  }
}