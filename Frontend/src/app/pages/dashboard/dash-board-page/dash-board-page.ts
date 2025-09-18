import { Component } from '@angular/core';
import { CategoryDashBoardGrid } from "../category-dash-board-grid/category-dash-board-grid";

@Component({
  selector: 'app-dash-board-page',
  imports: [CategoryDashBoardGrid],
  templateUrl: './dash-board-page.html',
  styleUrl: './dash-board-page.css'
})
export class DashBoardPage {

}
