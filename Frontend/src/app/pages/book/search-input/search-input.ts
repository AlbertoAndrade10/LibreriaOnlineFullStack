import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css'
})
export class SearchInput {
  @Input() placeholder: string = '';
}
