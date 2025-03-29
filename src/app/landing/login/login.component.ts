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

  isFormValid = false;

  constructor(private router: Router) {}

  validateForm() {
    // Asegurarse de que las expresiones devuelvan un boolean
    const usernameValid = !!this.loginData.username && this.loginData.username.length >= 6;
    const passwordValid = !!this.loginData.password && this.loginData.password.length >= 6;
    this.isFormValid = usernameValid && passwordValid;
  }

  login() {
    if (this.isFormValid) {
      this.router.navigate(['/admin/inicio']);
    } else {
      alert('Por favor, ingresa un usuario y contraseña válidos.');
    }
  }
}
