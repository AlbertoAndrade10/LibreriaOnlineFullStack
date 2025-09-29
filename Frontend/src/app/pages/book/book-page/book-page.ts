import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SearchInput } from "../search-input/search-input";
import { LiteraryGenresContentGrid } from "../literary-genres-content-grid/literary-genres-content-grid";
import { Paginator } from "../paginator/paginator";
import { BookService } from '../../../services/BookService/book-service';
import { Book } from '../../../models/book.model';
import { LiteraryGenre } from '../../../models/LiteraryGenre.model';
import { LiteraryGenreService } from '../../../services/LiteraryGenreService/literary-genre-service';
import { isPlatformBrowser } from '@angular/common';
import { forkJoin } from 'rxjs';
import { BookCard } from "../book-card/book-card";

@Component({
  selector: 'app-book-page',
  imports: [SearchInput, LiteraryGenresContentGrid, Paginator, BookCard],
  templateUrl: './book-page.html',
  styleUrl: './book-page.css'
})


export class BookPage implements OnInit {
  books: Book[] = [];
  literaryGenres: LiteraryGenre[] = [];
  loading: boolean = false;
  error: string | null = null;
  showContent: boolean = false;

  constructor(
    private readonly bookService: BookService,
    private readonly literaryGenreService: LiteraryGenreService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log("Mostrando todos los libros");
      this.loadAllData();
    }
  }

  loadAllData() {
    this.loading = true;
    this.error = null;

    forkJoin({
      books: this.bookService.getAllBooks(),
      genres: this.literaryGenreService.getAllGenres()
    }).subscribe({
      next: (results) => {
        this.books = results.books;
        this.literaryGenres = results.genres;
        this.loading = false;
        this.showContent = true;
      },
      error: (err) => {
        console.error("Error al cargar los datos:", err);
        this.error = "No se pudieron cargar los datos";
        this.loading = false;
      }
    });
  }
}
