import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from '../../components/book-search/book-search.component';
import { GenreFilterComponent } from '../../components/genre-filter/genre-filter.component';
import { BookCardComponent } from '../../components/cards/book-card/book-card.component';
import { Book, Genre } from '../../models/book.model';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [
    CommonModule,
    BookSearchComponent,
    GenreFilterComponent,
    BookCardComponent
  ],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  genres: Genre[] = [];
  selectedGenre: string | null = null;
  searchTerm: string = '';

  ngOnInit() {
    this.loadMockData();
    this.filteredBooks = [...this.books];
  }

  loadMockData() {
    // Datos de ejemplo - en la vida real vendrían de un servicio
    this.genres = [
      { id: 1, name: 'Ficción', bookCount: 120 },
      { id: 2, name: 'No Ficción', bookCount: 85 },
      { id: 3, name: 'Ciencia Ficción', bookCount: 67 },
      { id: 4, name: 'Romance', bookCount: 92 },
      { id: 5, name: 'Misterio', bookCount: 54 },
      { id: 6, name: 'Biografía', bookCount: 43 },
      { id: 7, name: 'Historia', bookCount: 38 },
      { id: 8, name: 'Autoayuda', bookCount: 71 }
    ];

    this.books = [
      {
        id: 1,
        title: 'El Señor de los Anillos',
        author: 'J.R.R. Tolkien',
        description: 'Una épica aventura en la Tierra Media',
        price: 24.99,
        coverImage: '',
        rating: 4.8,
        genre: 'Ficción',
        publicationYear: 1954,
        pages: 1216,
        isbn: '978-0544003415'
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        description: 'Una distopía sobre el control totalitario',
        price: 12.99,
        coverImage: '',
        rating: 4.6,
        genre: 'Ciencia Ficción',
        publicationYear: 1949,
        pages: 328,
        isbn: '978-0451524935'
      },
      {
        id: 3,
        title: 'Orgullo y Prejuicio',
        author: 'Jane Austen',
        description: 'Una novela clásica de amor y sociedad',
        price: 14.99,
        coverImage: '',
        rating: 4.7,
        genre: 'Romance',
        publicationYear: 1813,
        pages: 432,
        isbn: '978-1503290563'
      },
      {
        id: 4,
        title: 'El Código Da Vinci',
        author: 'Dan Brown',
        description: 'Un thriller que combina arte, historia y conspiraciones',
        price: 16.99,
        coverImage: '',
        rating: 4.3,
        genre: 'Misterio',
        publicationYear: 2003,
        pages: 489,
        isbn: '978-0307475496'
      },
      {
        id: 5,
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        description: 'Una breve historia de la humanidad',
        price: 18.99,
        coverImage: '',
        rating: 4.5,
        genre: 'No Ficción',
        publicationYear: 2011,
        pages: 443,
        isbn: '978-0062316097'
      },
      {
        id: 6,
        title: 'Harry Potter y la Piedra Filosofal',
        author: 'J.K. Rowling',
        description: 'El inicio de la mágica aventura de Harry Potter',
        price: 15.99,
        coverImage: '',
        rating: 4.9,
        genre: 'Ficción',
        publicationYear: 1997,
        pages: 223,
        isbn: '978-0439708188'
      }
    ];
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.filterBooks();
  }

  onClearSearch() {
    this.searchTerm = '';
    this.filterBooks();
  }

  onGenreSelect(genre: string | null) {
    this.selectedGenre = genre;
    this.filterBooks();
  }

  filterBooks() {
    this.filteredBooks = this.books.filter(book => {
      const matchesSearch = this.searchTerm === '' ||
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        book.isbn.includes(this.searchTerm);

      const matchesGenre = !this.selectedGenre || book.genre === this.selectedGenre;

      return matchesSearch && matchesGenre;
    });
  }
}