import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Author } from '../../../../../models/author.model';
import { LiteraryGenre } from '../../../../../models/LiteraryGenre.model';
import { AuthorService } from '../../../../../services/AuthorService/author-service';
import { LiteraryGenreService } from '../../../../../services/LiteraryGenreService/literary-genre-service';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm implements OnInit {

  @Output() bookSubmit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  bookForm: FormGroup;
  authors: Author[] = [];
  literaryGenres: LiteraryGenre[] = [];
  selectedFile: File | null = null;
  previewUrl: string | null = null;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private literaryGenreService: LiteraryGenreService
  ) {
    this.bookForm = this.fb.group({
      bookName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      authorId: ['', Validators.required],
      literaryGenreId: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.01), Validators.max(999999)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      stock: ['', [Validators.required, Validators.min(0), Validators.max(999999)]],
      image: [null]
    });
  }

  ngOnInit(): void {
    this.loadAuthors();
    this.loadLiteraryGenres();
  }

  loadAuthors() {
    this.authorService.getAllAuthors().subscribe({
      next: (authors) => {
        this.authors = authors;
      },
      error: (error) => {
        console.error('Error loading authors:', error);
        this.errorMessage = 'Error al cargar los autores';
      }
    });
  }

  loadLiteraryGenres() {
    this.literaryGenreService.getAllGenres().subscribe({
      next: (genres) => {
        this.literaryGenres = genres;
      },
      error: (error) => {
        console.error('Error loading literary genres:', error);
        this.errorMessage = 'Error al cargar los géneros literarios';
      }
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Validar tipo de archivo
      if (!file.type.match('image.*')) {
        this.errorMessage = 'Por favor seleccione un archivo de imagen válido';
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        this.errorMessage = 'La imagen no debe superar los 5MB';
        return;
      }

      // Crear URL de previsualización
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
        this.errorMessage = null;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;

      const formData = new FormData();

      // Agregar campos del formulario
      const formValues = this.bookForm.value;
      formData.append('bookName', formValues.bookName);
      formData.append('authorId', formValues.authorId);
      formData.append('literaryGenreId', formValues.literaryGenreId);
      formData.append('price', formValues.price.toString());
      formData.append('description', formValues.description);
      formData.append('stock', formValues.stock.toString());

      // Agregar imagen si existe
      if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }

      // Emitir el evento con los datos
      this.bookSubmit.emit({
        formData: formData,
        formValues: formValues
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  get bookName() { return this.bookForm.get('bookName'); }
  get authorId() { return this.bookForm.get('authorId'); }
  get literaryGenreId() { return this.bookForm.get('literaryGenreId'); }
  get price() { return this.bookForm.get('price'); }
  get description() { return this.bookForm.get('description'); }
  get stock() { return this.bookForm.get('stock'); }
}
