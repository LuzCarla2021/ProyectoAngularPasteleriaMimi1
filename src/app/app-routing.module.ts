import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { ConocenosComponent } from './landing/conocenos/conocenos.component';
import { ProductosLandingComponent } from './landing/productos-landing/productos-landing.component';
import { UbicanosComponent } from './landing/ubicanos/ubicanos.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './landing/login/login.component';
const routes: Routes = [
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
  // Rutas de 'pages'
  {
    path: 'admin',
    component: AppComponent,
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
  },
  { path: 'login', component: LoginComponent } // "/login"
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }