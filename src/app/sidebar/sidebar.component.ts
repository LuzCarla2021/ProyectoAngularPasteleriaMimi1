import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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

  inicio() {
    this.router.navigate(['/admin/inicio']);
  }

  productos() {
    this.router.navigate(['/admin/productos']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
  
  
}