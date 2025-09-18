import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-shearch-component-dashboard',
  imports: [],
  templateUrl: './shearch-component-dashboard.html',
  styleUrl: './shearch-component-dashboard.css'
})
export class ShearchComponentDashboard {
  @Input() placeholder: string = '';
}
