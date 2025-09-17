import { Component } from '@angular/core';
import { SearchInput } from "../search-input/search-input";
import { LiteraryGenresContentGrid } from "../literary-genres-content-grid/literary-genres-content-grid";
import { BookCardComponent } from "../book-card-component/book-card-component";
import { Paginator } from "../paginator/paginator";

@Component({
  selector: 'app-book-page',
  imports: [SearchInput, LiteraryGenresContentGrid, BookCardComponent, Paginator],
  templateUrl: './book-page.html',
  styleUrl: './book-page.css'
})
export class BookPage {

}
