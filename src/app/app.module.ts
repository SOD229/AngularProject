import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }            from './app.routing';
import { AppComponent }       from './app.component';
import { InicioComponent }    from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleComponent }   from './detalle/detalle.component';
import { CarritoComponent }   from './carrito/carrito.component';
import {ElemCarritoComponent} from './elemento-carrito/elemento-carrito.component';

import { ProductoService }  from './producto.service';
import { CarritoService }   from './carrito.service';
import { PedidosService }   from './pedidos.service';

import {CategoriaPipe}  from './categoria.pipe';
import { CompraComponent } from './compra/compra.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ElementoPedidoComponent } from './elemento-pedido/elemento-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    DetalleComponent,
    CarritoComponent,
    ElemCarritoComponent,
    CategoriaPipe,
    CompraComponent,
    PedidosComponent,
    ElementoPedidoComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService, CarritoService, PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
