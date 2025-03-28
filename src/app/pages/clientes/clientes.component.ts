import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clients = [
    { id: 1, name: 'Ana López', email: 'ana@example.com', phone: '555-1234' },
    { id: 2, name: 'Juan Pérez', email: 'juan@example.com', phone: '555-5678' },
    { id: 3, name: 'María Gómez', email: 'maria@example.com', phone: '555-9012' }
  ];
}
