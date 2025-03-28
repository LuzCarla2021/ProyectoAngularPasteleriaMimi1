import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  standalone: false,
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
  sales = [
    { id: 1, date: new Date(), customer: 'Ana López', total: 450 },
    { id: 2, date: new Date(), customer: 'Juan Pérez', total: 200 },
    { id: 3, date: new Date(), customer: 'María Gómez', total: 300 }
  ];
}
