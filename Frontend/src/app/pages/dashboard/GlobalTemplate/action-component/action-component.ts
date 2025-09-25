import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ModalService } from '../service/modal-service';

@Component({
  selector: 'app-action-component',
  imports: [],
  templateUrl: './action-component.html',
  styleUrl: './action-component.css'
})
export class ActionComponent {
  @Input() buttonText: string = '';
  @Output() actionClick = new EventEmitter<void>();

  constructor(private modalService: ModalService) { }

  onActionClick() {
    this.modalService.openModal();
    this.actionClick.emit();
  }

}
