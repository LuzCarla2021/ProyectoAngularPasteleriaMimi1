import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  employees = [
    { id: 1, name: 'Carlos Ramírez', role: 'Repostero', phone: '555-3456' },
    { id: 2, name: 'Laura Martínez', role: 'Vendedora', phone: '555-7890' },
    { id: 3, name: 'Pedro Sánchez', role: 'Gerente', phone: '555-2345' }
  ];
}
