import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import {CarritoService} from './carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor(private router: Router, private carritoService: CarritoService){}

  ngOnInit(){ 
    this.carritoService.recover();
  }
}
