import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-hero-component',
  imports: [],
  templateUrl: './button-hero-component.html',
  styleUrl: './button-hero-component.css'
})
export class ButtonHeroComponent {
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
}
