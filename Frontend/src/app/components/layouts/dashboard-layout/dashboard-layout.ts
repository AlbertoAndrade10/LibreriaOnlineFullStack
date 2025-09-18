import { Component } from '@angular/core';
import { CategoryDashBoardGrid } from "../../../pages/dashboard/category-dash-board-grid/category-dash-board-grid";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CategoryDashBoardGrid, RouterOutlet],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css'
})
export class DashboardLayout {

}
