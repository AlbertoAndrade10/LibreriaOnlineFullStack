import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header-component/header-component';
import { Footer } from "../../shared/footer/footer";



@Component({
  selector: 'app-base-layout',
  imports: [RouterOutlet, HeaderComponent, Footer],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css'
})
export class BaseLayout implements AfterViewInit {
  ngAfterViewInit() {
    // Manejo del sidebar móvil
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    if (openSidebarBtn && closeSidebarBtn && sidebar) {
      openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });

      overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }
}
