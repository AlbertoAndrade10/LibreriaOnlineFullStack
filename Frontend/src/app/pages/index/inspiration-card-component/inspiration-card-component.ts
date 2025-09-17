import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inspiration-card-component',
  imports: [],
  templateUrl: './inspiration-card-component.html',
  styleUrl: './inspiration-card-component.css'
})
export class InspirationCardComponent {
  @Input() textInspiration: string = '';
}
