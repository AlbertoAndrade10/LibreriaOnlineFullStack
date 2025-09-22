import { Component, OnInit } from '@angular/core';
import { LiteraryGenreService } from '../../../services/LiteraryGenreService/literary-genre-service';
import { LiteraryGenre } from '../../../models/LiteraryGenre.model';

@Component({
  selector: 'app-literary-genres-content-grid',
  imports: [],
  templateUrl: './literary-genres-content-grid.html',
  styleUrl: './literary-genres-content-grid.css'
})
export class LiteraryGenresContentGrid implements OnInit {

  literaryGenres: LiteraryGenre[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private readonly http: LiteraryGenreService) { }

  ngOnInit(): void {
    console.log("Cargar generos literarios");
    this.loadLiteraryGenres();
  }

  loadLiteraryGenres() {
    this.loading = true;
    this.error = null;

    this.http.getAllGenres().subscribe({
      next: (genre) => {
        this.literaryGenres = genre;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error al cargar los generos literarios:", err)
        this.error = "No se pudieron cargar los generos literarios"
        this.loading = false;
      }
    })
  }
}
