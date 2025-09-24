import { Injectable } from '@angular/core';
import { BaseApi } from '../BaseApiService/base-api';
import { Observable } from 'rxjs';
import { LiteraryGenre } from '../../models/LiteraryGenre.model';
import { API_ENDPOINTS } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LiteraryGenreService extends BaseApi {

  getAllGenres(): Observable<LiteraryGenre[]> {

    console.log("LiteraryGenreService: getAllGenres() llamado");
    const stack = new Error().stack;
    console.log("Stack trace:", stack);

    return this.get<LiteraryGenre[]>(API_ENDPOINTS.LITERARYGENRES);
  }
  getGenreById(id: number): Observable<LiteraryGenre> {
    return this.getById<LiteraryGenre>(API_ENDPOINTS.LITERARYGENRES, id)
  }
  createGenre(genreName: string): Observable<LiteraryGenre> {
    const params = new URLSearchParams({ genreName }).toString();
    return this.post<LiteraryGenre>(`${API_ENDPOINTS.LITERARYGENRES}?${params}`, {});
  }
  updateGenre(id: number, genreName: string): Observable<LiteraryGenre> {
    const body = { genreName };
    return this.put<LiteraryGenre>(API_ENDPOINTS.LITERARYGENRES, id, body);
  }
  deleteGenre(id: number): Observable<any> {
    return this.delete<any>(API_ENDPOINTS.LITERARYGENRES, id);
  }

}
