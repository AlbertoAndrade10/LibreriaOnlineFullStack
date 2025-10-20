import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../../../../services/BookService/book-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Author } from '../../../../models/author.model';
import { LiteraryGenre } from '../../../../models/LiteraryGenre.model';
import { AuthorService } from '../../../../services/AuthorService/author-service';
import { LiteraryGenreService } from '../../../../services/LiteraryGenreService/literary-genre-service';

@Component({
  selector: 'app-add-book-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-book-form.html',
  styleUrl: './add-book-form.css'
})
export class AddBookForm implements OnInit {

  bookForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private bookService = inject(BookService);
  private authorService: AuthorService = inject(AuthorService);
  private literaryGenreService = inject(LiteraryGenreService);
  authors: Author[] = [];
  genres: LiteraryGenre[] = [];

  constructor() {
    this.bookForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      descripcion: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      imagen: [null]
    });
  }
  ngOnInit(): void {
    this.bookForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      descripcion: [''],
      stock: ['', [Validators.required, Validators.min(0)]],
      imagen: [null]
    });

    this.loadAuthors();
    this.loadGenres();
  }


  loadAuthors(): void {
    this.authorService.getAllAuthors().subscribe({
      next: (authors) => {
        this.authors = authors;
      },
      error: (err) => {
        console.error('Error al cargar autores:', err);
      }
    });
  }
  loadGenres(): void {
    this.literaryGenreService.getAllGenres().subscribe({
      next: (genres) => {
        this.genres = genres;
      },
      error: (err) => {
        console.error('Error al cargar géneros literarios:', err);
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.bookForm.patchValue({ imagen: file });
      console.log('Archivo seleccionado:', file.name);
    }
  }

  addBook() {
    if (this.bookForm.valid) {
      const formValue = this.bookForm.value;

      const formData = new FormData();
      formData.append('bookName', formValue.titulo);
      formData.append('authorId', formValue.autor.toString());
      formData.append('literaryGenreId', formValue.genero.toString());
      formData.append('price', formValue.precio.toString());
      formData.append('description', formValue.descripcion || '');
      formData.append('stock', formValue.stock.toString());


      if (formValue.imagen && formValue.imagen instanceof File) {

        formData.append('image', formValue.imagen, formValue.imagen.name);
        console.log('Imagen adjuntada al formData:', formValue.imagen.name);
      } else {
        console.log('No se seleccionó ninguna imagen o no es un archivo válido.');

      }




      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      this.bookService.createBook(formData).subscribe({
        next: (newBook) => {
          console.log('Libro agregado:', newBook);
          alert('Libro agregado exitosamente');
          this.router.navigate(['/dashboard/administration-books']);
          this.bookForm.reset();

          const fileInput = document.getElementById('imagen') as HTMLInputElement;
          if (fileInput) fileInput.value = '';
        },
        error: (err) => {
          console.error('Error al agregar el libro:', err);
          let errorMessage = 'Hubo un error al agregar el libro.';
          if (err.error && typeof err.error === 'object' && err.error.message) {
            errorMessage += ` Detalles: ${err.error.message}`;
          } else if (err.status === 500) {
            errorMessage += ' Error interno del servidor. Revisa la consola del navegador y del servidor.';
          }
          alert(errorMessage);
        }
      });
    }
  }
}