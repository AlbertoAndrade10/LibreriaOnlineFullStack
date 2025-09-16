import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu-component',
  imports: [],
  templateUrl: './nav-menu-component.html',
  styleUrl: './nav-menu-component.css'
})
export class NavMenuComponent {
  @Output() close = new EventEmitter<void>();
}
