import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  users = [
    { id: 1, name: 'Admin', email: 'admin@example.com', role: 'Administrador' },
    { id: 2, name: 'Vendedor', email: 'vendedor@example.com', role: 'Vendedor' },
    { id: 3, name: 'Repostero', email: 'repostero@example.com', role: 'Repostero' }
  ];
}
