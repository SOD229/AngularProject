import{ Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';

const APP_ROUTE: Routes = [
    {path:'inicio', component: InicioComponent},
    {path:'productos', component: ProductosComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTE);