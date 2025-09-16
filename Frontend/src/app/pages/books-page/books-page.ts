import { Component, Input } from '@angular/core';
import { BookGrid } from "../../components/book-grid/book-grid";
import { SearchBar } from "../../components/search-bar/search-bar";
import { LiteraryGenreBar } from "../../components/literary-genre-bar/literary-genre-bar";
import { TitleText } from "../../components/title-text/title-text";

@Component({
  selector: 'app-books-page',
  imports: [BookGrid, SearchBar, LiteraryGenreBar, TitleText],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css'
})
export class BooksPage {
  @Input() title: string = 'Nuestros Libros';

}
