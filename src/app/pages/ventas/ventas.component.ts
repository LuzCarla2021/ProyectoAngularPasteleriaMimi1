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

  isAddingSale = false;
  newSale = {
    customer: '',
    total: 0
  };

  // Mostrar formulario para agregar nueva venta
  showAddSaleForm() {
    this.isAddingSale = true;
  }

  // Ocultar formulario de agregar venta
  hideAddSaleForm() {
    this.isAddingSale = false;
    this.newSale = { customer: '', total: 0 };  // Limpiar campos
  }

  // Guardar nueva venta
  saveSale() {
    if (this.newSale.customer && this.newSale.total > 0) {
      const newSaleId = this.sales.length + 1;
      const sale = {
        id: newSaleId,
        date: new Date(),
        customer: this.newSale.customer,
        total: this.newSale.total
      };
      this.sales.push(sale);
      this.hideAddSaleForm();  // Ocultar el formulario después de agregar la venta
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
