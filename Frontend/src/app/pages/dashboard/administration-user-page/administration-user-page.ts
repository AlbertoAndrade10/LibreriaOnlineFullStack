import { Component } from '@angular/core';
import { GlobalTemplateContent } from "../GlobalTemplate/global-template-content/global-template-content";
import { TitleComponent } from "../GlobalTemplate/title-component/title-component";
import { ActionComponent } from "../GlobalTemplate/action-component/action-component";
import { TableComponent } from "../GlobalTemplate/table-component/table-component";

@Component({
  selector: 'app-administration-user-page',
  imports: [GlobalTemplateContent, TitleComponent, ActionComponent, TableComponent],
  templateUrl: './administration-user-page.html',
  styleUrl: './administration-user-page.css'
})
export class AdministrationUserPage {
  tableHeaders = ['Id', 'Nombre', 'Email', 'Rol', 'Estado'];
  tableData = [
    ['1', 'Nombre Usuario ', 'email@gmail.com', 'USER', 'Activo'],
    ['1', 'Nombre Usuario ', 'email@gmail.com', 'ADMIN', 'Activo'],
    ['1', 'Nombre Usuario ', 'email@gmail.com', 'ADMIN', 'Activo'],
    ['1', 'Nombre Usuario ', 'email@gmail.com', 'ADMIN', 'Activo'],
    ['1', 'Nombre Usuario ', 'email@gmail.com', 'ADMIN', 'Activo'],



  ];
}
