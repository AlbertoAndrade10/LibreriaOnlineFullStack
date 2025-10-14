import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { GlobalTemplateContent } from "../GlobalTemplate/global-template-content/global-template-content";
import { TitleComponent } from "../GlobalTemplate/title-component/title-component";
import { ActionComponent } from "../GlobalTemplate/action-component/action-component";
import { TableComponent } from "../GlobalTemplate/table-component/table-component";
import { ShearchComponentDashboard } from "../GlobalTemplate/shearch-component-dashboard/shearch-component-dashboard";
import { CategoryDashBoardGrid } from "../category-dash-board-grid/category-dash-board-grid";
import { BookService } from '../../../services/BookService/book-service';
import { Book } from '../../../models/book.model';
import { LiteraryGenre } from '../../../models/LiteraryGenre.model';
import { LiteraryGenreService } from '../../../services/LiteraryGenreService/literary-genre-service';
import { forkJoin } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { ModalService } from '../GlobalTemplate/service/modal-service';
import { BookForm } from '../GlobalTemplate/forms/book-form/book-form';


@Component({
  selector: 'app-administration-book-page',
  imports: [GlobalTemplateContent, TitleComponent, ActionComponent, TableComponent, ShearchComponentDashboard, CategoryDashBoardGrid, BookForm],
  templateUrl: './administration-book-page.html',
  styleUrl: './administration-book-page.css'
})
export class AdministrationBookPage implements OnInit {

  books: Book[] = [];
  literaryGenres: LiteraryGenre[] = [];
  loading: boolean = false;
  error: string | null = null;
  showContent: boolean = false;

  tableHeaders = ['Id', 'Nombre', 'Autor', 'Precio', 'Stock', 'Acciones'];
  tableData: string[][] = [];

  constructor(
    private readonly bookService: BookService,
    private readonly literaryGenreService: LiteraryGenreService,
    private modalService: ModalService,
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
        this.transformBooksToTableData();
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

  private transformBooksToTableData() {
    this.tableData = this.books.map(book => [
      book.id?.toString() || '',
      book.bookName || '',
      book.author.authorName || '',
      book.price?.toString() || '',
      book.stock.toString() || '',
      ''
    ]);
  }

  onActionClick() {
    console.log('Botón de acción clickeado - abrir modal');
  }

  onBookSubmit(data: any) {
    const formData = data.formData;

    this.bookService.createBook(formData).subscribe({
      next: (newBook) => {
        console.log('Libro creado exitosamente:', newBook);
        this.loadAllData();
        this.modalService.closeModal();
        alert('Libro creado exitosamente!');
      },
      error: (error) => {
        console.error('Error al crear el libro:', error);
        alert('Error al crear el libro: ' + (error.error?.message || 'Ocurrió un error'));
      }
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }

  onModify(event: any) {
    console.log('Modificar:', event);
    const bookIndex = event.index;
    const book = this.books[bookIndex];
    console.log('Libro a modificar:', book);
  }

  onDelete(event: any) {

    const bookId = parseInt(event.row[0]);
    const bookIndex = event.index;
    const book = this.books[bookIndex];

    console.log('Libro a eliminar:', book);


    if (confirm(`¿Estás seguro de que deseas eliminar el libro "${book.bookName}"?`)) {
      this.bookService.deleteBook(bookId).subscribe({
        next: () => {
          console.log('Libro eliminado exitosamente');

          this.loadAllData();
        },
        error: (error) => {
          console.error('Error al eliminar el libro:', error);
          alert('Error al eliminar el libro: ' + (error.error?.message || 'Ocurrió un error'));
        }
      });
    }
  }
}