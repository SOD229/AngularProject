import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls:['./carrito.component.css']
})

export class CarritoComponent
{
    carrito: number[];

    constructor(private carritoService: CarritoService){}

    ngOnInit(){
        this.carrito = this.carritoService.getCarrito();
    }
}