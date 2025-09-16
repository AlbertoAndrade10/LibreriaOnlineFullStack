import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApi {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(protected readonly http: HttpClient) { }

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  protected getById<T>(url: string, id: number): Observable<T> {
    return this.http.get<T>(`${url}/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  protected post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  protected put<T>(url: string, id: number, data: any): Observable<T> {
    return this.http.put<T>(`${url}/${id}`, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  protected delete<T>(url: string, id: number): Observable<T> {
    return this.http.delete<T>(`${url}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  protected handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
