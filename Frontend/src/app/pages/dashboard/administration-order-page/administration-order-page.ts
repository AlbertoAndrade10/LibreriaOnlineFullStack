import { Component } from '@angular/core';
import { GlobalTemplateContent } from "../GlobalTemplate/global-template-content/global-template-content";
import { TitleComponent } from "../GlobalTemplate/title-component/title-component";
import { TableComponent } from "../GlobalTemplate/table-component/table-component";
import { ActionComponent } from "../GlobalTemplate/action-component/action-component";
import { ShearchComponentDashboard } from "../GlobalTemplate/shearch-component-dashboard/shearch-component-dashboard";

@Component({
  selector: 'app-administration-order-page',
  imports: [GlobalTemplateContent, TitleComponent, TableComponent, ActionComponent, ShearchComponentDashboard],
  templateUrl: './administration-order-page.html',
  styleUrl: './administration-order-page.css'
})
export class AdministrationOrderPage {
  tableHeaders = ['UsuarioID', 'Nombre Usuario', 'Email', 'Id Pedido'];
  tableData = [
    ['1', 'Nombre Usuario ', 'emailusuario@gmai.com', '1234'],
    ['1', 'Nombre Usuario ', 'emailusuario@gmai.com', '1234'],
    ['1', 'Nombre Usuario ', 'emailusuario@gmai.com', '1234'],
    ['1', 'Nombre Usuario ', 'emailusuario@gmai.com', '1234'],
    ['1', 'Nombre Usuario ', 'emailusuario@gmai.com', '1234'],


  ];
}
