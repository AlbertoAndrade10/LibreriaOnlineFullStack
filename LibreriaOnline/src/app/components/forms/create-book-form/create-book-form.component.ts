import { Component, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-book-form.component.html',
  styleUrl: './create-book-form.component.css'
})
export class CreateBookFormComponent {
  @Input() isVisible = false;
  @Input() genres: any[] = [];
  @Output() bookCreated = new EventEmitter<Book>();
  @Output() modalClosed = new EventEmitter<void>();

  @ViewChild('fileInput') fileInput!: ElementRef;

  bookForm: FormGroup;
  selectedFileName: string = '';

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [0, [Validators.required, Validators.min(0)]],
      coverImage: ['', [Validators.required]], // Aquí almacenaremos temporalmente el archivo o su representación
      rating: [0, [Validators.min(0), Validators.max(5)]],
      genre: ['', [Validators.required]],
      publicationYear: [new Date().getFullYear(), [Validators.required, Validators.min(1000)]],
      pages: [0, [Validators.required, Validators.min(1)]],
      isbn: ['', [Validators.required, Validators.pattern(/^[\d-]{10,17}$/)]]
    });
  }

  // Getter para el año máximo
  get maxYear(): number {
    return new Date().getFullYear() + 1;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;

      // Aquí puedes manejar el archivo como necesites
      // Por ahora, solo almacenamos el nombre del archivo
      // En el futuro, puedes convertirlo a base64 o subirlo directamente

      // Actualizamos el form control con el nombre del archivo
      this.bookForm.patchValue({
        coverImage: file.name // O podrías usar file si necesitas el objeto completo
      });

      // Opcional: mostrar una vista previa de la imagen
      // this.previewImage(file);
    } else {
      this.selectedFileName = '';
      this.bookForm.patchValue({
        coverImage: ''
      });
    }
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const newBook: Book = {
        id: 0, // El ID será asignado por el backend
        ...this.bookForm.value,
        price: Number(this.bookForm.value.price),
        publicationYear: Number(this.bookForm.value.publicationYear),
        pages: Number(this.bookForm.value.pages),
        rating: Number(this.bookForm.value.rating)
      };

      this.bookCreated.emit(newBook);
      this.resetForm();
    } else {
      this.markFormGroupTouched();
    }
  }

  closeModal() {
    this.modalClosed.emit();
    this.resetForm();
  }

  private resetForm() {
    this.bookForm.reset({
      title: '',
      author: '',
      description: '',
      price: 0,
      coverImage: '',
      rating: 0,
      genre: '',
      publicationYear: new Date().getFullYear(),
      pages: 0,
      isbn: ''
    });
    this.selectedFileName = '';

    // Limpiar el input de archivo
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.bookForm.controls).forEach(key => {
      const control = this.bookForm.get(key);
      control?.markAsTouched();
    });
  }

  // Métodos para obtener errores de validación
  getFieldError(fieldName: string): string {
    const field = this.bookForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return 'Este campo es requerido';
      if (field.errors['minlength']) return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
      if (field.errors['min']) return 'El valor no puede ser negativo';
      if (field.errors['max']) return 'El valor máximo es 5';
      if (field.errors['pattern']) return 'Formato de ISBN inválido';
    }
    return '';
  }
}