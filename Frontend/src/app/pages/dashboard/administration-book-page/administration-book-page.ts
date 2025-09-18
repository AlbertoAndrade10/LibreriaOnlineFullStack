import { Component } from '@angular/core';
import { GlobalTemplateContent } from "../GlobalTemplate/global-template-content/global-template-content";
import { TitleComponent } from "../GlobalTemplate/title-component/title-component";
import { ActionComponent } from "../GlobalTemplate/action-component/action-component";
import { TableComponent } from "../GlobalTemplate/table-component/table-component";

@Component({
  selector: 'app-administration-book-page',
  imports: [GlobalTemplateContent, TitleComponent, ActionComponent, TableComponent],
  templateUrl: './administration-book-page.html',
  styleUrl: './administration-book-page.css'
})
export class AdministrationBookPage {
  tableHeaders = ['Nombre', 'Email', 'Rol', 'Estado'];
  tableData = [
    ['Juan Pérez', 'juan@example.com', 'Admin', 'Activo'],
    ['María García', 'maria@example.com', 'Usuario', 'Activo'],
    ['Carlos López', 'carlos@example.com', 'Usuario', 'Inactivo']
  ];
}
