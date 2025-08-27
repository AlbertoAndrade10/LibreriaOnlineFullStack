import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre } from '../../models/book.model';

@Component({
  selector: 'app-genre-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genre-filter.component.html',
  styleUrl: './genre-filter.component.css'
})
export class GenreFilterComponent {
  @Input() genres: Genre[] = [];
  @Input() selectedGenre: string | null = null;
  @Output() genreSelect = new EventEmitter<string | null>();

  selectGenre(genreName: string) {
    if (this.selectedGenre === genreName) {
      this.genreSelect.emit(null);
    } else {
      this.genreSelect.emit(genreName);
    }
  }

  clearFilter() {
    this.genreSelect.emit(null);
  }
}