import { Component, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service'
import { CarritoService } from  '../carrito.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent 
{
    @Output() slctProducto: Producto;
    productos: Producto[];
    
    constructor(private prodServ:ProductoService, private carrService: CarritoService, private route:ActivatedRoute){}
    
    ngOnInit(){
        this.prodServ.getProductos().then(respuesta => {
            this.productos = respuesta;
            this.productos.forEach(p => p.urlImagen = "assets/galeria/"+p.id+".jpg");
        });
    }

    selecProducto(producto: Producto){
        this.slctProducto = producto;
    }

    agregarCarrito(p: Producto):void{
        this.carrService.addElemento(p.id,p.precio);
    }
}