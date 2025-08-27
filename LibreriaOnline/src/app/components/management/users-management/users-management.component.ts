import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../dashboard/admin-header/admin-header.component';
import { AdminSidebarComponent } from '../../dashboard/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [CommonModule, AdminHeaderComponent, AdminSidebarComponent],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.css'
})
export class UsersManagementComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
