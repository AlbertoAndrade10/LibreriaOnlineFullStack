import { Component } from '@angular/core';
import { BookCard } from "../cards/book-card/book-card";
import 'animate.css';
@Component({
  selector: 'app-book-grid',
  imports: [BookCard],
  templateUrl: './book-grid.html',
  styleUrl: './book-grid.css'
})
export class BookGrid {

}
