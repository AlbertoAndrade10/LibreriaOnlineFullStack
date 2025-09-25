import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { LogoComponent } from "../logo-component/logo-component";
import { AuthButtonsComponent } from "../auth-buttons-component/auth-buttons-component";
import { HamburgerButtonComponent } from "../hamburger-button-component/hamburger-button-component";
import { NavMenuComponent } from "../nav-menu-component/nav-menu-component";
import { Router } from '@angular/router';
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
  isDropDownOpen = false;
  private subscription = new Subscription();

  @ViewChild('dropdownRef', { static: false }) dropdownRef!: ElementRef;

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

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (this.isDropDownOpen && !this.dropdownRef?.nativeElement.contains(target)) {
      this.isDropDownOpen = false;
    }
  }
  closeDropdown() {
    this.isDropDownOpen = false;
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
  logoutAndClose() {
    this.closeDropdown();
    this.logout();
  }
  getInitials(): string {
    if (this.userName) {
      const names = this.userName.split(' ');
      return names.map(n => n[0]).join('').toUpperCase().substring(0, 2);
    }
    return '';
  }
}