import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  products = [
    { id: 1, name: 'Pastel de Chocolate Chico', price: 350, stock: 10, category: 'Pastel tres leches' },
    { id: 2, name: 'Pastel de Vainilla Chico', price: 350, stock: 25, category: 'Pastel tres leches' },
    { id: 3, name: 'Pastel de Chocolate Mediano', price: 350, stock: 25, category: 'Pastel tres leches' },
    { id: 4, name: 'Pastel de Vainilla Mediano', price: 350, stock: 25, category: 'Pastel tres leches' },
    { id: 5, name: 'Pastel de Chocolate Grande', price: 350, stock: 25, category: 'Pastel tres leches' },
    { id: 6, name: 'Gelatina Chica', price: 350, stock: 25, category: 'Gelatina' },
    { id: 7, name: 'Gelatina Grande', price: 350, stock: 25, category: 'Gelatina' },
    { id: 8, name: 'Panque Nuez', price: 350, stock: 25, category: 'Pastel tres leches' },
    { id: 9, name: 'Panque Chocolate', price: 350, stock: 25, category: 'Panque' },
    { id: 10, name: 'Panque Vainilla', price: 350, stock: 25, category: 'Panque' }
  ];

  categories = ['Pastel tres leches', 'Pastel Mantequilla', 'Gelatina', 'Panque', 'Postres individuales'];

  newProduct = {
    id: 0,
    name: '',
    price: 0,
    stock: 0,
    category: ''
  };

  isAddingProduct = false;
  isEditing = false;  // Nueva variable para saber si estás editando
  editingProductId: number | null = null;  // Para identificar qué producto se está editando

  // Mostrar formulario para agregar o editar
  showAddProductForm(product: any = null) {
    this.isAddingProduct = true;

    if (product) {
      // Si estamos editando, rellenar los campos con el producto seleccionado
      this.isEditing = true;
      this.editingProductId = product.id;
      this.newProduct = { ...product };
    } else {
      // Si agregamos un nuevo producto, limpiar el formulario
      this.isEditing = false;
      this.editingProductId = null;
      this.newProduct = { id: 0, name: '', price: 0, stock: 0, category: '' };
    }
  }

  hideAddProductForm() {
    this.isAddingProduct = false;
    this.isEditing = false;
    this.editingProductId = null;
  }

  // Agregar o actualizar producto
  saveProduct() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.stock >= 0 && this.newProduct.category) {
      if (this.isEditing && this.editingProductId !== null) {
        // Actualizar el producto existente
        const index = this.products.findIndex(p => p.id === this.editingProductId);
        if (index > -1) {
          this.products[index] = { ...this.newProduct, id: this.editingProductId };
        }
      } else {
        // Agregar nuevo producto
        const newId = this.products.length + 1;
        const product = { ...this.newProduct, id: newId };
        this.products.push(product);
      }

      // Limpiar formulario
      this.newProduct = { id: 0, name: '', price: 0, stock: 0, category: '' };
      this.isAddingProduct = false;
      this.isEditing = false;
      this.editingProductId = null;
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  // Confirmar antes de eliminar
  deleteProduct(productId: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.products = this.products.filter(p => p.id !== productId);
    }
  }
}
