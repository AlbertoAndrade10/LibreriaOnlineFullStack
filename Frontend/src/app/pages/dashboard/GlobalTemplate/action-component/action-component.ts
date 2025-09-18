import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-component',
  imports: [],
  templateUrl: './action-component.html',
  styleUrl: './action-component.css'
})
export class ActionComponent {
  @Input() buttonText: string = '';
  @Output() actionClick = new EventEmitter<void>();

  onActionClick() {
    this.actionClick.emit();
  }
}
