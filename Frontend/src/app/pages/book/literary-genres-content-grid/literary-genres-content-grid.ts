import { Component, Input, OnInit } from '@angular/core';
import { LiteraryGenreService } from '../../../services/LiteraryGenreService/literary-genre-service';
import { LiteraryGenre } from '../../../models/LiteraryGenre.model';

@Component({
  selector: 'app-literary-genres-content-grid',
  imports: [],
  templateUrl: './literary-genres-content-grid.html',
  styleUrl: './literary-genres-content-grid.css'
})
export class LiteraryGenresContentGrid implements OnInit {

  @Input() literaryGenres: LiteraryGenre[] = [];
  loading: boolean = false;
  error: string | null = null;
  hasReceivedData: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Marcar si se recibieron datos por input
    this.hasReceivedData = this.literaryGenres.length > 0;

    if (this.hasReceivedData) {
      console.log("LiteraryGenresContentGrid: Datos recibidos por input, NO se hará petición");
    } else {
      console.log("LiteraryGenresContentGrid: No se recibieron datos por input, NO se hará petición (por diseño)");
    }
  }
}
