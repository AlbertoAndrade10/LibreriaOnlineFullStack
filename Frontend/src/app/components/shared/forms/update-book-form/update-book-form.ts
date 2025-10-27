import { Component, inject, OnInit, Input, Output, EventEmitter } from '@angular/core'; // Añade Input y EventEmitter
import { Book, BookUpdateDTO } from '../../../../models/book.model';
import { BookService } from '../../../../services/BookService/book-service';
import { LiteraryGenreService } from '../../../../services/LiteraryGenreService/literary-genre-service';
import { AuthorService } from '../../../../services/AuthorService/author-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Author } from '../../../../models/author.model';
import { LiteraryGenre } from '../../../../models/LiteraryGenre.model';

@Component({
  selector: 'app-update-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './update-book-form.html',
  styleUrl: './update-book-form.css'
})
export class UpdateBookForm implements OnInit {

  @Input() bookId!: number; //recibe
  @Output() bookUpdated = new EventEmitter<BookUpdateDTO>(); //emite
  @Output() closeModal = new EventEmitter<void>();

  book: Book | null = null;
  authors: Author[] = [];
  literaryGenres: LiteraryGenre[] = [];
  fb: FormBuilder = inject(FormBuilder);
  showModal: boolean = false;
  loading: boolean = false;
  errorMessage: string | null = null;


  updateBookForm = this.fb.group({
    bookName: ['', Validators.required],
    authorId: ['', Validators.required],
    literaryGenreId: ['', Validators.required],
    price: ['', Validators.required, Validators.min(0)],
    description: ['', Validators.required],
    stock: ['', Validators.required, Validators.min(1)],
    urlImage: [''],
  });



  constructor(
    private readonly bookService: BookService,
    private readonly literaryGenreService: LiteraryGenreService,
    private readonly authorService: AuthorService) { }

  ngOnInit(): void {
    this.loadBookData();
    this.loadAuthorsAndGenres();

  }


  loadBookData() {
    this.bookService.getBookById(this.bookId).subscribe({
      next: (book) => {
        this.book = book;

        this.updateBookForm.patchValue({
          bookName: book.bookName,
          authorId: book.author.id?.toString() ?? null,
          literaryGenreId: book.literaryGenre.id?.toString() ?? null,
          price: book.price?.toString() ?? null,
          description: book.description?.toString(),
          stock: book.stock?.toString() ?? null,
          urlImage: book.urlImage?.toString() || '',
        });
      },
      error: (err) => {
        console.error('Error al cargar el libro:', err);
        this.errorMessage = 'Error al cargar los datos del libro.';
      }
    });
  }
  loadAuthorsAndGenres() {
    this.authorService.getAllAuthors().subscribe({
      next: (authors) => {
        this.authors = authors;
      },
      error: (err) => {
        console.error('Error al cargar autores:', err);
        this.errorMessage = 'Error al cargar los autores.';
      }
    });

    this.literaryGenreService.getAllGenres().subscribe({
      next: (genres) => {
        this.literaryGenres = genres;
      },
      error: (err) => {
        console.error('Error al cargar géneros literarios:', err);
        this.errorMessage = 'Error al cargar los géneros literarios.';
      }
    })
  }

  onSubmit() {
    if (this.updateBookForm.valid) {
      this.loading = true;
      const formValue = this.updateBookForm.value;

      const updateData: BookUpdateDTO = {
        bookName: formValue.bookName!,
        authorId: formValue.authorId ? +formValue.authorId : undefined,
        literaryGenreId: formValue.literaryGenreId ? +formValue.literaryGenreId : undefined,
        price: formValue.price ? +formValue.price : undefined,
        description: formValue.description!,
        stock: formValue.stock ? +formValue.stock : undefined,
        urlImage: formValue.urlImage || undefined,
      };

      if (isNaN(updateData.authorId!) || isNaN(updateData.literaryGenreId!) || isNaN(updateData.price!) || isNaN(updateData.stock!)) {
        console.error('Error: Uno o más campos numéricos contienen valores inválidos.');
        this.errorMessage = 'Por favor, asegúrese de que los campos numéricos (precio, stock) contengan valores válidos.';
        this.loading = false;
        return;
      }

      this.bookService.updateBook(this.bookId, updateData).subscribe({
        next: (updatedBook) => {
          this.loading = false;
          this.bookUpdated.emit(updatedBook);
          this.closeModal.emit();
        },
        error: (err) => {
          console.error('Error al actualizar el libro:', err);
          this.errorMessage = 'Error al actualizar el libro.';
          this.loading = false;
        }
      });
    }
  }

  onCancel() {
    this.closeModal.emit();
  }

  openModal() {
    this.showModal = true;
  }

  closeModalHander() {
    this.showModal = false;
    this.closeModal.emit();
  }


}