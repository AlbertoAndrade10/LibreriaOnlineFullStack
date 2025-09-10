import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';
import { Author } from '../../models/author.model';
import { LiteraryGenre } from '../../models/LiteraryGenre.model';
import { BookService } from '../BookService/book-service';
import { AuthorService } from '../AuthorService/author-service';
import { LiteraryGenreService } from '../LiteraryGenreService/literary-genre-service';
import { forkJoin, map, Observable } from 'rxjs';

export interface DashboardData {
  books: Book[];
  authors: Author[];
  genres: LiteraryGenre[];
}


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private readonly bookService: BookService,
    private readonly authorService: AuthorService,
    private readonly literaryGenreService: LiteraryGenreService
  ) { }

  getDashBoardData(): Observable<DashboardData> {
    return forkJoin({
      books: this.bookService.getAllBooks(),
      authors: this.authorService.getAllAuthors(),
      genres: this.literaryGenreService.getAllGenres()
    });
  }

  getBooksWithDetails(): Observable<Book[]> {
    return this.bookService.getAllBooks().pipe(
      map(books => books.map(book => ({
        ...book,
        author: book.author,
        literaryGenre: book.literaryGenre
      })))
    );
  }

}
