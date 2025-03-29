// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Añade CommonModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { ConocenosComponent } from './landing/conocenos/conocenos.component';
import { ProductosLandingComponent } from './landing/productos-landing/productos-landing.component';
import { UbicanosComponent } from './landing/ubicanos/ubicanos.component';
import { NavbarComponent } from './landing/navbar/navbar.component';
import { LoginComponent } from './landing/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    ProductosComponent,
    VentasComponent,
    PedidosComponent,
    ClientesComponent,
    EmpleadosComponent,
    UsuariosComponent,
    LandingComponent,
    HomeComponent,
    ConocenosComponent,
    ProductosLandingComponent,
    UbicanosComponent,
    NavbarComponent,
    LoginComponent,
    AdminLayoutComponent,
    PublicLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule // Añade CommonModule para directivas como ngClass
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }