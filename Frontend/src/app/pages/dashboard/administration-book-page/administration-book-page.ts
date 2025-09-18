import { Component } from '@angular/core';
import { GlobalTemplateContent } from "../GlobalTemplate/global-template-content/global-template-content";
import { TitleComponent } from "../GlobalTemplate/title-component/title-component";
import { ActionComponent } from "../GlobalTemplate/action-component/action-component";
import { TableComponent } from "../GlobalTemplate/table-component/table-component";
import { ShearchComponentDashboard } from "../GlobalTemplate/shearch-component-dashboard/shearch-component-dashboard";
import { CategoryDashBoardGrid } from "../category-dash-board-grid/category-dash-board-grid";

@Component({
  selector: 'app-administration-book-page',
  imports: [GlobalTemplateContent, TitleComponent, ActionComponent, TableComponent, ShearchComponentDashboard, CategoryDashBoardGrid],
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
