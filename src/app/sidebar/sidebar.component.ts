import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.isCollapsed$.subscribe(isCollapsed => {
      this.isCollapsed = isCollapsed;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    // Simular el cierre de sesión con una alerta
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      alert('Sesión cerrada exitosamente.');
      // Aquí puedes agregar la lógica real para cerrar sesión, como redirigir a la página de login
      // Por ejemplo: this.router.navigate(['/login']);
    }
  }
  
}