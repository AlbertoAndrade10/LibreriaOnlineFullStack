import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../../dashboard/admin-sidebar/admin-sidebar.component';
import { CreateBookFormComponent } from '../../forms/create-book-form/create-book-form.component';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-management',
  standalone: true,
  imports: [AdminSidebarComponent, CreateBookFormComponent],
  templateUrl: './book-management.component.html',
  styleUrl: './book-management.component.css'
})
export class BookManagementComponent {
  isSidebarOpen = false;
  isModalOpen = false;

  // Datos de ejemplo para los géneros
  genres = [
    { id: 1, name: 'Ficción', bookCount: 15 },
    { id: 2, name: 'No Ficción', bookCount: 8 },
    { id: 3, name: 'Ciencia Ficción', bookCount: 12 },
    { id: 4, name: 'Misterio', bookCount: 7 },
    { id: 5, name: 'Romance', bookCount: 9 },
    { id: 6, name: 'Biografía', bookCount: 5 }
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    //window.location.reload()
  }

  handleBookCreated(book: Book) {
    console.log('Libro creado:', book);
    // Aquí iría la lógica para guardar el libro
    // Por ejemplo: this.bookService.createBook(book).subscribe(...)

    // Cerrar el modal después de crear el libro
    this.closeModal();

    // Opcional: mostrar un mensaje de éxito
    alert('Libro creado exitosamente!');

  }
}