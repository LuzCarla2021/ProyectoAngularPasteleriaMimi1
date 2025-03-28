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

  isAddingUser = false;
  isConfirmingDelete = false;  // Para manejar el modal de confirmación
  userToDelete: number | null = null;  // Guardamos el ID del usuario a eliminar

  newUser = { id: 0, name: '', email: '', password: '', role: '' };

  showAddUserForm() {
    this.isAddingUser = true;
    this.resetUserForm();
  }

  hideAddUserForm() {
    this.isAddingUser = false;
  }

  saveUser() {
    this.newUser.id = this.users.length + 1;
    this.users.push({ ...this.newUser });
    this.hideAddUserForm();
  }

  resetUserForm() {
    this.newUser = { id: 0, name: '', email: '', password: '', role: '' };
  }

  // Inicia la confirmación de eliminación
  confirmDelete(userId: number) {
    this.isConfirmingDelete = true;
    this.userToDelete = userId;
  }

  // Cancela la eliminación
  cancelDelete() {
    this.isConfirmingDelete = false;
    this.userToDelete = null;
  }

  // Elimina el usuario después de confirmación
  deleteConfirmed() {
    if (this.userToDelete !== null) {
      this.users = this.users.filter(user => user.id !== this.userToDelete);
    }
    this.cancelDelete();
  }

  editUser(userId: number) {
    alert('Editar usuario ID ' + userId);
  }
}
