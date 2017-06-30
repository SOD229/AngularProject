import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }            from './app.routing';
import { AppComponent }       from './app.component';
import { InicioComponent }    from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';

import { ProductoService } from './producto.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
