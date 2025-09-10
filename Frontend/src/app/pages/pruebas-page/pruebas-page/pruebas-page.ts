import { Component, computed, OnInit, signal } from '@angular/core';
import { Book } from '../../../models/book.model';
import { BookService } from '../../../services/BookService/book-service';

@Component({
  selector: 'app-pruebas-page',
  imports: [],
  templateUrl: './pruebas-page.html',
  styleUrl: './pruebas-page.css'
})
export class PruebasPage implements OnInit {
  books = signal<Book[]>([])
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  //computed properties

  hasBooks = computed(() => this.books().length > 0);
  booksCount = computed(() => this.books().length);

  constructor(private readonly bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading.set(true);
    this.error.set(null)

    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books.set(books);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar libros: ' + err);
        this.loading.set(false);
        console.error('Error loading books; ', err);
      }
    });
  }
  onImageError(event: any): void {
    const target = event.target as HTMLImageElement;
    target.src = 'https://placehold.co/300x400/e2e8f0/94a3b8?text=Sin+Imagen';
  }
  refreshBooks() {
    this.loadBooks();
  }

  getAuthorName(book: Book): string {
    return book.author?.authorName || 'Autor desconocido';
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }
  getGenreName(book: Book): string {
    return book.literaryGenre?.literaryGenreName || 'Género desconocido';
  }


  getStockStatus(stock: number): { class: string; text: string } {
    if (stock === 0) {
      return { class: 'bg-red-100 text-red-800', text: 'Agotado' };
    } else if (stock < 10) {
      return { class: 'bg-yellow-100 text-yellow-800', text: 'Pocas unidades' };
    } else {
      return { class: 'bg-green-100 text-green-800', text: 'Disponible' };
    }
  }

}
