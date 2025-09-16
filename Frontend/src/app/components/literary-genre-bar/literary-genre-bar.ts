import { Component } from '@angular/core';
import 'animate.css';
@Component({
  selector: 'app-literary-genre-bar',
  imports: [],
  templateUrl: './literary-genre-bar.html',
  styleUrl: './literary-genre-bar.css'
})
export class LiteraryGenreBar {
  genres = [
    { id: 1, name: 'Todos' },
    { id: 2, name: 'Ficción' },
    { id: 3, name: 'No Ficción' },
    { id: 4, name: 'Ciencia Ficción' },
    { id: 5, name: 'Fantasía' },
    { id: 6, name: 'Misterio' },
    { id: 7, name: 'Romance' },
    { id: 8, name: 'Terror' },
    { id: 9, name: 'Biografía' },
    { id: 10, name: 'Histórico' },
    { id: 11, name: 'Poesía' }
  ];

  selectedGenre: number | null = null;

  selectGenre(id: number): void {
    this.selectedGenre = id;
  }
}
