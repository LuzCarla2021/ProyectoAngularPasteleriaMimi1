import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    // Simular autenticación (por ahora, cualquier usuario/contraseña funciona)
    if (this.loginData.username && this.loginData.password) {
      // Redirigir al panel administrativo
      this.router.navigate(['/admin/inicio']);
    } else {
      alert('Por favor, ingresa un usuario y contraseña válidos.');
    }
  }
}
