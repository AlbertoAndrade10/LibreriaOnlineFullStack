import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../services/BookService/book-service';
import { LiteraryGenre } from '../../../models/LiteraryGenre.model';
import { forkJoin } from 'rxjs';
import { LiteraryGenreService } from '../../../services/LiteraryGenreService/literary-genre-service';
import { isPlatformBrowser } from '@angular/common';
import { AddBookForm } from "../../../components/shared/forms/add-book-form/add-book-form";

@Component({
  selector: 'app-administration-book-page',
  imports: [AddBookForm],
  templateUrl: './administration-book-page.html',
  styleUrl: './administration-book-page.css'
})
export class AdministrationBookPage implements OnInit {

  books: Book[] = [];
  literaryGenres: LiteraryGenre[] = [];
  loading: boolean = false;
  error: string | null = null;
  showContent: boolean = false;
  showAddForm: boolean = false;

  constructor(
    private readonly bookService: BookService,
    private readonly literaryGenreService: LiteraryGenreService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    console.log("AdministrationBookPage cargado");
    if (isPlatformBrowser(this.platformId)) {
      console.log("Mostrando todos los libros");
      this.loadAllData();
    }
  }


  //getAllBooks
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


  //visible form
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }



}