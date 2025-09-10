import { Injectable } from '@angular/core';
import { BaseApi } from '../BaseApiService/base-api';
import { Observable } from 'rxjs';
import { Author } from '../../models/author.model';
import { API_ENDPOINTS } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseApi {

  getAllAuthors(): Observable<Author[]> {
    return this.get<Author[]>(API_ENDPOINTS.AUTHORS);
  }
  getAuthorById(id: number): Observable<Author> {
    return this.getById<Author>(API_ENDPOINTS.AUTHORS, id);
  }
  createAuthor(authorName: string): Observable<Author> {
    const params = new URLSearchParams({ authorName }).toString();
    return this.post<Author>(`${API_ENDPOINTS.AUTHORS}?${params}`, {});
  }

  updateAuthor(id: number, authorName: string): Observable<Author> {
    const body = { authorName };
    return this.put<Author>(API_ENDPOINTS.AUTHORS, id, body);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.delete<any>(API_ENDPOINTS.AUTHORS, id);
  }

}
