import { Component } from '@angular/core';
import { BookGrid } from "../../components/book-grid/book-grid";
import { SearchBar } from "../../components/search-bar/search-bar";
import { LiteraryGenreBar } from "../../components/literary-genre-bar/literary-genre-bar";

@Component({
  selector: 'app-books-page',
  imports: [BookGrid, SearchBar, LiteraryGenreBar],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css'
})
export class BooksPage {

}
