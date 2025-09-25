import { Injectable } from '@angular/core';
import { BaseApi } from '../BaseApiService/base-api';
import { Observable } from 'rxjs';
import { Book, BookCreateDTO, BookUpdateDTO } from '../../models/book.model';
import { API_ENDPOINTS } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseApi {

  getAllBooks(): Observable<Book[]> {
    return this.get<Book[]>(API_ENDPOINTS.BOOKS);
  }

  getBookById(id: number): Observable<Book> {
    return this.getById<Book>(API_ENDPOINTS.BOOKS, id);
  }

  createBook(bookData: FormData): Observable<Book> {
    return this.post<Book>(API_ENDPOINTS.BOOKS, bookData);
  }

  updateBook(id: number, book: BookUpdateDTO): Observable<Book> {
    return this.put<Book>(API_ENDPOINTS.BOOKS, id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.delete<any>(API_ENDPOINTS.BOOKS, id);
  }

  getBooksByAuthor(authorId: number): Observable<Book[]> {
    return this.get<Book[]>(`${API_ENDPOINTS.BOOKS}/author/${authorId}`);
  }

  getBooksByGenre(genreId: number): Observable<Book[]> {
    return this.get<Book[]>(`${API_ENDPOINTS.BOOKS}/genre/${genreId}`);
  }

}
