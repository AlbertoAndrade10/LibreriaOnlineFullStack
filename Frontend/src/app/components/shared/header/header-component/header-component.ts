import { Component } from '@angular/core';
import { LogoComponent } from "../logo-component/logo-component";
import { AuthButtonsComponent } from "../auth-buttons-component/auth-buttons-component";
import { HamburgerButtonComponent } from "../hamburger-button-component/hamburger-button-component";
import { NavMenuComponent } from "../nav-menu-component/nav-menu-component";
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header-component',
  imports: [LogoComponent, AuthButtonsComponent, HamburgerButtonComponent, NavMenuComponent, RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {

  isMenuOpen: boolean = false;


  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
