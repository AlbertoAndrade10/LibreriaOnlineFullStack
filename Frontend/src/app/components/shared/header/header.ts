import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
RouterLink

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit, OnDestroy {
  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLButtonElement>;
  @ViewChild('menuClose') menuClose!: ElementRef<HTMLButtonElement>;
  @ViewChild('menuOverlay') menuOverlay!: ElementRef<HTMLDivElement>;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLDivElement>;
  @ViewChild('headerElement') headerElement!: ElementRef<HTMLElement>;

  private cleanupFunctions: (() => void)[] = [];

  ngAfterViewInit() {
    this.setupMenuEvents();
  }

  ngOnDestroy() {
    // Limpiar todos los event listeners
    this.cleanupFunctions.forEach(cleanup => cleanup());
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = this.headerElement.nativeElement;
    const scrollY = window.scrollY;

    //funciones para cunado se hace scroll
    if (scrollY > 50) {
      header.classList.add('bg-blue-600/90');
      header.classList.add('backdrop-blur-sm');
      header.classList.remove('bg-blue-600');
    } else {
      // Volver al estado normal
      header.classList.remove('bg-blue-600/90');
      header.classList.remove('backdrop-blur-sm');
      header.classList.add('bg-blue-600');
    }
  }

  // Verificar que todos los elementos existen
  private setupMenuEvents(): void {
    if (!this.menuToggle || !this.menuClose || !this.menuOverlay || !this.mobileMenu) {
      console.warn('Algunos elementos del menú no se encontraron');
      return;
    }

    const menuToggleEl = this.menuToggle.nativeElement;
    const menuCloseEl = this.menuClose.nativeElement;
    const menuOverlayEl = this.menuOverlay.nativeElement;
    const mobileMenuEl = this.mobileMenu.nativeElement;

    // funcion para abrir el menu
    const openMenu = () => {
      mobileMenuEl.classList.remove('translate-x-full');
      mobileMenuEl.classList.add('translate-x-0');
      menuOverlayEl.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    };

    // función para cerrar el menu
    const closeMenu = () => {
      mobileMenuEl.classList.remove('translate-x-0');
      mobileMenuEl.classList.add('translate-x-full');
      menuOverlayEl.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    };

    // event listeners
    menuToggleEl.addEventListener('click', openMenu);
    menuCloseEl.addEventListener('click', closeMenu);
    menuOverlayEl.addEventListener('click', closeMenu);

    // cerrar menu al seleccionar enlace
    const menuLinks = Array.from(mobileMenuEl.querySelectorAll('a'));
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // guarda las funciones
    this.cleanupFunctions.push(
      () => menuToggleEl.removeEventListener('click', openMenu),
      () => menuCloseEl.removeEventListener('click', closeMenu),
      () => menuOverlayEl.removeEventListener('click', closeMenu)
    );

    // Limpiar event listeners 
    menuLinks.forEach(link => {
      this.cleanupFunctions.push(() => link.removeEventListener('click', closeMenu));
    });
  }
}