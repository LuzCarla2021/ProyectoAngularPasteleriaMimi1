import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products = [
    { id: 1, name: 'Pastel de Chocolate', price: 350, stock: 10 },
    { id: 2, name: 'Cupcake de Vainilla', price: 50, stock: 25 },
    { id: 3, name: 'Galletas de Avena', price: 80, stock: 15 }
  ];

  showAddProductForm() {
    // Aquí puedes implementar la lógica para mostrar un formulario
    alert('Funcionalidad para agregar producto aún no implementada.');
  }
}
