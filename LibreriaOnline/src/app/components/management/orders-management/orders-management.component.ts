import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../dashboard/admin-header/admin-header.component';
import { AdminSidebarComponent } from '../../dashboard/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-orders-management',
  standalone: true,
  imports: [CommonModule, AdminHeaderComponent, AdminSidebarComponent],
  templateUrl: './orders-management.component.html',
  styleUrl: './orders-management.component.css'
})
export class OrdersManagementComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
