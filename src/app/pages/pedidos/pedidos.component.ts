import { Component } from '@angular/core';

// Define la interfaz Pedido
interface Pedido {
  id: number;
  size: string;
  shape: string;
  flavor: string;
  filling: string;
  dedication: string;
  hasPhoto: boolean;
}

@Component({
  selector: 'app-pedidos',
  standalone: false,
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  isAddingOrder = false;
  isEditingOrder = false;
  orders: Pedido[] = [];  // Definimos el tipo de datos de orders como un array de objetos Pedido
  newOrder: Pedido = {
    id: 0,
    size: '',
    shape: '',
    flavor: '',
    filling: '',
    dedication: '',
    hasPhoto: false
  };

  // Muestra el formulario para hacer un nuevo pedido
  showAddOrderForm() {
    this.isAddingOrder = true;
    this.resetOrderForm();
  }

  // Oculta el formulario
  hideAddOrderForm() {
    this.isAddingOrder = false;
  }

  // Guarda el pedido
  saveOrder() {
    if (this.isEditingOrder) {
      const index = this.orders.findIndex(order => order.id === this.newOrder.id);
      this.orders[index] = { ...this.newOrder }; // Actualiza el pedido
    } else {
      this.newOrder.id = this.orders.length + 1; // Genera un ID para el nuevo pedido
      this.orders.push({ ...this.newOrder }); // Agrega el nuevo pedido
    }
    this.hideAddOrderForm(); // Oculta el formulario después de guardar
  }

  // Reinicia el formulario para un nuevo pedido
  resetOrderForm() {
    this.newOrder = {
      id: 0,
      size: '',
      shape: '',
      flavor: '',
      filling: '',
      dedication: '',
      hasPhoto: false
    };
    this.isEditingOrder = false;
  }

  // Ver detalles de un pedido (ejemplo)
  viewOrderDetails(orderId: number) {
    alert('Ver detalles del pedido ID ' + orderId);
  }
}
