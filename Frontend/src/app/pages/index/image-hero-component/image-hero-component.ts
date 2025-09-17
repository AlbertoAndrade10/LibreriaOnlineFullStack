import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-hero-component',
  imports: [],
  templateUrl: './image-hero-component.html',
  styleUrl: './image-hero-component.css'
})
export class ImageHeroComponent {
  @Input() imageUrl: string = '';
}
