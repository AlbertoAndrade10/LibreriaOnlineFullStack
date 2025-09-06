import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCard {
  @Input() bookImage: string = './images/book-default.jpg';
  @Input() title: string = 'Título del libro';
  @Input() author: string = 'Autor desconocido';
  @Input() shortDescription: string = 'Descripción breve del libro...';
  @Input() fullDescription: string = 'Descripción completa del libro. Esta es una descripción más detallada que muestra todo el contenido del libro.';
  @Input() genre: string = 'Género';
  @Input() year: string = '2024';
  @Input() pages: string = '0';
  @Input() isbn: string = 'ISBN';






}
