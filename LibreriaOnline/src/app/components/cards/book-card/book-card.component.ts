import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book!: Book;

  // Métodos para usar en el template
  getFilledStars(rating: number): number {
    return Math.floor(rating);
  }

  getEmptyStars(rating: number): number {
    return 5 - Math.floor(rating);
  }

  // Array para iterar en el template
  getArray(length: number): any[] {
    return Array(length);
  }
}