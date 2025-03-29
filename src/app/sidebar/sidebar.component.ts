import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isCollapsed$.subscribe(isCollapsed => {
      this.isCollapsed = isCollapsed;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  showLogoutModal() {
    // Mostrar el modal usando Bootstrap
    const modal = document.getElementById('logoutModal');
    if (modal) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  confirmLogout() {
    // Cerrar el modal y redirigir
    const modal = document.getElementById('logoutModal');
    if (modal) {
      const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
      bootstrapModal.hide();
    }
    this.router.navigate(['/login']);
  }
}