import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: false,
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  orders = [
    { id: 1, customer: 'Ana López', date: new Date(), status: 'Pendiente' },
    { id: 2, customer: 'Juan Pérez', date: new Date(), status: 'En Proceso' },
    { id: 3, customer: 'María Gómez', date: new Date(), status: 'Entregado' }
  ];
}
