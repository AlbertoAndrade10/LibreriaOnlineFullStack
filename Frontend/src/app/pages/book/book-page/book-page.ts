import { Component, OnInit } from '@angular/core';
import { SearchInput } from "../search-input/search-input";
import { LiteraryGenresContentGrid } from "../literary-genres-content-grid/literary-genres-content-grid";
import { BookCardComponent } from "../book-card-component/book-card-component";
import { Paginator } from "../paginator/paginator";
import { BookService } from '../../../services/BookService/book-service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-page',
  imports: [SearchInput, LiteraryGenresContentGrid, BookCardComponent, Paginator],
  templateUrl: './book-page.html',
  styleUrl: './book-page.css'
})
export class BookPage implements OnInit {
  books: Book[] = []
  loading: boolean = false;
  error: string | null = null;

  constructor(private readonly http: BookService) { }

  ngOnInit(): void {
    console.log("Mostrando todos los libros")
    this.getAllBooks();
  }

  getAllBooks() {
    this.loading = true;
    this.error = null;

    this.http.getAllBooks().subscribe({
      next: (book) => {
        this.books = book;
        this.loading = true;
      },
      error: (err) => {
        console.error("Error al cargar los libros:", err)
        this.error = "No se pudieron cargar los libros "
        this.loading = false;
      }
    })
  }
}
