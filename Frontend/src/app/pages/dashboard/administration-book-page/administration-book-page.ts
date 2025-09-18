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
  tableHeaders = ['Id', 'Nombre', 'Author', 'Precio', 'Estado'];
  tableData = [
    ['1', 'Nombre libro ', 'Nombre autor', '1.1', 'Activo'],
    ['1', 'Nombre libro ', 'Nombre autor', '1.1', 'Activo'],
    ['1', 'Nombre libro ', 'Nombre autor', '1.1', 'Activo'],
    ['1', 'Nombre libro ', 'Nombre autor', '1.1', 'Activo'],
    ['1', 'Nombre libro ', 'Nombre autor', '1.1', 'Activo'],

  ];
}
