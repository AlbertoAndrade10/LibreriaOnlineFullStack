import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-text',
  imports: [],
  templateUrl: './title-text.html',
  styleUrl: './title-text.css'
})
export class TitleText {
  @Input() title: string = '';
}
