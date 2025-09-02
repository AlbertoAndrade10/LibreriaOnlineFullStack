import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inspirational-card',
  imports: [],
  templateUrl: './inspirational-card.html',
  styleUrl: './inspirational-card.css'
})
export class InspirationalCard {
  @Input() quote: string = '';
  @Input() iconType: 'quote' | 'book' | 'light' | 'star' = 'quote';
  @Input() iconColor: string = 'text-blue-600';
}
