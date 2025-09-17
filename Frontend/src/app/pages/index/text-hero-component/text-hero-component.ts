import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-hero-component',
  imports: [],
  templateUrl: './text-hero-component.html',
  styleUrl: './text-hero-component.css'
})
export class TextHeroComponent {
  @Input() text: string = '';

}
