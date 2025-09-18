import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-nav-menu-component',
  imports: [RouterLink],
  templateUrl: './nav-menu-component.html',
  styleUrl: './nav-menu-component.css'
})
export class NavMenuComponent {
  @Output() close = new EventEmitter<void>();
}
