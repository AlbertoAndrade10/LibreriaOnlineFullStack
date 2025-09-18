import { Component } from '@angular/core';
import { CategoryDashBoardGrid } from "../../category-dash-board-grid/category-dash-board-grid";
import { DashboardLayout } from "../../../../components/layouts/dashboard-layout/dashboard-layout";


@Component({
  selector: 'app-global-template-content',
  imports: [CategoryDashBoardGrid, DashboardLayout],
  templateUrl: './global-template-content.html',
  styleUrl: './global-template-content.css'
})
export class GlobalTemplateContent {


}
