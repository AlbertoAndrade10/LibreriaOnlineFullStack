import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-book-card-component',
  imports: [],
  templateUrl: './image-book-card-component.html',
  styleUrl: './image-book-card-component.css'
})
export class ImageBookCardComponent {
  @Input() imageUrl: string = '';
  @Input() altText: string = '';
}
