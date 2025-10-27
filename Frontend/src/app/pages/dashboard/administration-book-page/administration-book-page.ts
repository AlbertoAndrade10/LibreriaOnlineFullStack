import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../services/BookService/book-service';
import { LiteraryGenre } from '../../../models/LiteraryGenre.model';
import { forkJoin } from 'rxjs';
import { LiteraryGenreService } from '../../../services/LiteraryGenreService/literary-genre-service';
import { isPlatformBrowser } from '@angular/common';
import { AddBookForm } from "../../../components/shared/forms/add-book-form/add-book-form";
import { UpdateBookForm } from "../../../components/shared/forms/update-book-form/update-book-form";

@Component({
  selector: 'app-administration-book-page',
  imports: [AddBookForm, UpdateBookForm],
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
  showUpdateForm: boolean = false;
  bookIdToEdit: number | null = null;

  constructor(
    private readonly bookService: BookService,
    private readonly literaryGenreService: LiteraryGenreService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadAllData();
    }
  }

  openUpdateForm(bookId: number) {
    this.bookIdToEdit = bookId;
    this.showUpdateForm = true;
    this.showAddForm = false;
  }

  closeUpdateForm() {
    this.showUpdateForm = false;
    this.bookIdToEdit = null;
  }

  reloadBooks() {
    this.loadAllData();
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;

    if (this.showAddForm) {
      this.closeUpdateForm();
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

  deleteBook(bookId: number) {
    const confirmation = confirm("¿Estás seguro de que deseas eliminar este libro?");
    if (!confirmation) {
      return;
    }

    this.bookService.deleteBook(bookId).subscribe({
      next: () => {
        this.reloadBooks();
        alert("Libro eliminado exitosamente.");
      },
      error: (err) => {
        console.error("Error al eliminar el libro:", err);
        alert("Hubo un error al eliminar el libro. Por favor, inténtalo de nuevo.");
        this.error = "No se pudo eliminar el libro";
      }
    });
  }
}