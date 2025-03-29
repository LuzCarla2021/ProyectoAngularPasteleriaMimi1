// admin-layout.component.ts
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../sidebar.service';

@Component({
  selector: 'app-admin-layout',
  standalone: false,
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  title = 'ProyectoAngularPasteleriaMimi';
  isSidebarCollapsed = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.isCollapsed$.subscribe((isCollapsed: boolean) => {
      this.isSidebarCollapsed = isCollapsed;
    });
  } 
}