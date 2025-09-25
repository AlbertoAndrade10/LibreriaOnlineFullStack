import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ActionConfig {
  name: string;
  class: string;
  event: string;
}

@Component({
  selector: 'app-table-component',
  imports: [],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css'
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() data: any[][] = [];
  @Input() actionConfig: ActionConfig[] = [
    { name: 'Modificar', class: 'bg-blue-500 hover:bg-blue-600', event: 'modify' },
    { name: 'Eliminar', class: 'bg-red-500 hover:bg-red-600', event: 'delete' }
  ];

  @Output() modify = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  onAction(row: any[], index: number, action: ActionConfig) {
    if (action.event === 'modify') {
      this.modify.emit({ row, index });
    } else if (action.event === 'delete') {
      this.delete.emit({ row, index });
    }
  }
}
