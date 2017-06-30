import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service'

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})

export class ProductosComponent {
    
    productos: Producto[];

    constructor(private prodServ:ProductoService){}


    ngOnInit(){
        this.prodServ.getProductos().then(respuesta => this.productos = respuesta);
    }
}