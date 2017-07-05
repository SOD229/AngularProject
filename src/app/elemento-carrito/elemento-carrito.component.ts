import { Component, Input, OnInit } from '@angular/core';
import { Producto, Detalle } from '../producto';
import { ProductoService } from '../producto.service';
import { CarritoService} from '../carrito.service';


@Component({
    selector: 'elemento-carrito',
    templateUrl: './elemento-carrito.component.html',
    styleUrls: ['./elemento-carrito.component.css']
})

export class ElemCarritoComponent
{
    @Input() idProd: number;
    @Input() indice: number;
    producto: Producto;

    constructor(private prodService: ProductoService, private carritoService: CarritoService){}

    ngOnInit(){
        this.prodService.getProducto(this.idProd).then(respuesta => this.producto = respuesta[0]);
    }

    eliminar():void{
        this.carritoService.delElemento(this.indice, this.producto.precio);
    }
}