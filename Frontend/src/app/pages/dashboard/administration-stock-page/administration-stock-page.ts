import { Component } from '@angular/core';
import { GlobalTemplateContent } from "../GlobalTemplate/global-template-content/global-template-content";
import { TitleComponent } from "../GlobalTemplate/title-component/title-component";
import { ActionComponent } from "../GlobalTemplate/action-component/action-component";
import { TableComponent } from "../GlobalTemplate/table-component/table-component";

@Component({
  selector: 'app-administration-stock-page',
  imports: [GlobalTemplateContent, TitleComponent, ActionComponent, TableComponent],
  templateUrl: './administration-stock-page.html',
  styleUrl: './administration-stock-page.css'
})
export class AdministrationStockPage {
  tableHeaders = ['IdBook', 'NombreLibro', 'stock',];
  tableData = [
    ['1', 'Nombre libro ', '100'],
    ['1', 'Nombre libro ', '100'],
    ['1', 'Nombre libro ', '100'],
    ['1', 'Nombre libro ', '100'],
    ['1', 'Nombre libro ', '100'],

  ];
}
