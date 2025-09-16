import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-button-component',
  imports: [],
  templateUrl: './hamburger-button-component.html',
  styleUrl: './hamburger-button-component.css'
})
export class HamburgerButtonComponent {
  @Output() toggle = new EventEmitter<void>();
}
