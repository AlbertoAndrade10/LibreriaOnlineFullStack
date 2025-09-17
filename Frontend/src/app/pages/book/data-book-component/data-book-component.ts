import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-book-component',
  imports: [],
  templateUrl: './data-book-component.html',
  styleUrl: './data-book-component.css'
})
export class DataBookComponent {
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() description: string = '';
  @Input() price: string = '';

}
