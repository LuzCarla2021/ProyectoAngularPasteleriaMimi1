import { Component } from '@angular/core';

// Define la interfaz Empleado
interface Empleado {
  id: number;
  firstName: string;
  lastName: string;
  secondLastName: string;
  phone: string;
  birthDate: string;
  hireDate: string;
}

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  isAddingEmployee = false;
  isEditingEmployee = false;
  employees: Empleado[] = [];  // Array de empleados
  newEmployee: Empleado = {
    id: 0,  // ID inicial
    firstName: '',
    lastName: '',
    secondLastName: '',
    phone: '',
    birthDate: '',
    hireDate: ''
  };

  // Inicializamos con 6 empleados de ejemplo
  ngOnInit() {
    this.employees = [
      { id: 1, firstName: 'Juan', lastName: 'Pérez', secondLastName: 'García', phone: '555-0101', birthDate: '1990-05-20', hireDate: '2020-01-15' },
      { id: 2, firstName: 'Ana', lastName: 'López', secondLastName: 'Martínez', phone: '555-0102', birthDate: '1985-07-12', hireDate: '2019-11-01' },
      { id: 3, firstName: 'Carlos', lastName: 'Ramírez', secondLastName: 'Sánchez', phone: '555-0103', birthDate: '1992-03-09', hireDate: '2021-05-21' },
      { id: 4, firstName: 'María', lastName: 'González', secondLastName: 'Pérez', phone: '555-0104', birthDate: '1988-09-16', hireDate: '2018-06-12' },
      { id: 5, firstName: 'Luis', lastName: 'Martínez', secondLastName: 'Torres', phone: '555-0105', birthDate: '1995-01-25', hireDate: '2022-03-30' },
      { id: 6, firstName: 'Marta', lastName: 'Hernández', secondLastName: 'Díaz', phone: '555-0106', birthDate: '1989-11-08', hireDate: '2020-08-22' },
    ];
  }

  // Muestra el formulario para agregar un nuevo empleado
  showAddEmployeeForm() {
    this.isAddingEmployee = true;
    this.resetEmployeeForm();
  }

  // Oculta el formulario
  hideAddEmployeeForm() {
    this.isAddingEmployee = false;
  }

  // Guarda el empleado
  saveEmployee() {
    if (this.isEditingEmployee) {
      const index = this.employees.findIndex(employee => employee.id === this.newEmployee.id);
      this.employees[index] = { ...this.newEmployee }; // Actualiza el empleado
    } else {
      this.newEmployee.id = this.employees.length + 1; // Genera un ID para el nuevo empleado
      this.employees.push({ ...this.newEmployee }); // Agrega el nuevo empleado
    }
    this.hideAddEmployeeForm(); // Oculta el formulario después de guardar
  }

  // Reinicia el formulario para un nuevo empleado
  resetEmployeeForm() {
    this.newEmployee = {
      id: 0,
      firstName: '',
      lastName: '',
      secondLastName: '',
      phone: '',
      birthDate: '',
      hireDate: ''
    };
    this.isEditingEmployee = false;
  }

  // Ver detalles de un empleado
  viewEmployeeDetails(employeeId: number) {
    alert('Ver detalles del empleado ID ' + employeeId);
  }
}
