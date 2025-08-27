import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../dashboard/admin-header/admin-header.component';
import { AdminSidebarComponent } from '../../dashboard/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-settings-management',
  standalone: true,
  imports: [CommonModule, AdminHeaderComponent, AdminSidebarComponent],
  templateUrl: './settings-management.component.html',
  styleUrl: './settings-management.component.css'
})
export class SettingsManagementComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
