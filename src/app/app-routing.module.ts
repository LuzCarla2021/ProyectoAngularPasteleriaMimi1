// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { ConocenosComponent } from './landing/conocenos/conocenos.component';
import { ProductosLandingComponent } from './landing/productos-landing/productos-landing.component';
import { UbicanosComponent } from './landing/ubicanos/ubicanos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './landing/login/login.component';

const routes: Routes = [
  // Rutas públicas (con navbar, sin sidebar)
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      // Rutas de 'landing'
      {
        path: '',
        component: LandingComponent,
        children: [
          { path: '', component: HomeComponent }, // "/"
          { path: 'conocenos', component: ConocenosComponent }, // "/conocenos"
          { path: 'productos', component: ProductosLandingComponent }, // "/productos"
          { path: 'ubicanos', component: UbicanosComponent } // "/ubicanos"
        ]
      },
      // Ruta de login (dentro del navbar, sin sidebar)
      { path: 'login', component: LoginComponent } // "/login"
    ]
  },
  // Rutas administrativas (con sidebar)
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // "/admin" -> "/admin/inicio"
      { path: 'inicio', component: InicioComponent }, // "/admin/inicio"
      { path: 'productos', component: ProductosComponent }, // "/admin/productos"
      { path: 'ventas', component: VentasComponent }, // "/admin/ventas"
      { path: 'pedidos', component: PedidosComponent }, // "/admin/pedidos"
      { path: 'clientes', component: ClientesComponent }, // "/admin/clientes"
      { path: 'empleados', component: EmpleadosComponent }, // "/admin/empleados"
      { path: 'usuarios', component: UsuariosComponent } // "/admin/usuarios"
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }