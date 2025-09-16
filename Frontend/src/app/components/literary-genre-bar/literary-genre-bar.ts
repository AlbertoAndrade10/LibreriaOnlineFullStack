import { Component, OnInit } from '@angular/core';
import { LiteraryGenre } from '../../models/LiteraryGenre.model';
import 'animate.css';
import { LiteraryGenreService } from '../../services/LiteraryGenreService/literary-genre-service';
@Component({
  selector: 'app-literary-genre-bar',
  imports: [],
  templateUrl: './literary-genre-bar.html',
  styleUrl: './literary-genre-bar.css'
})
export class LiteraryGenreBar implements OnInit {

  genres: LiteraryGenre[] = [];
  selectedGenre: number | null = null;
  loading = false;
  error: string | null = null;

  constructor(private genreService: LiteraryGenreService) { }

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres(): void {
    this.loading = true;
    this.error = null;

    this.genreService.getAllGenres().subscribe({
      next: (genres) => {
        this.genres = genres;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading genres:', err);
        this.error = 'Error al cargar los géneros';
        this.loading = false;
      }
    });
  }

  selectGenre(id: number): void {
    this.selectedGenre = id;
  }
}
