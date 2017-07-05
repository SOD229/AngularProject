import{ Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import {CompraComponent } from './compra/compra.component';

const APP_ROUTE: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch:'full'},
    {path:'inicio', component: InicioComponent},
    {path:'productos/:categoria', component: ProductosComponent},
    {path:'carrito', component: CarritoComponent},
    {path:'compra', component:CompraComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTE);