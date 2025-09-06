import { Component } from '@angular/core';
import { BookGrid } from "../../components/book-grid/book-grid";

@Component({
  selector: 'app-books-page',
  imports: [BookGrid],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css'
})
export class BooksPage {

}
