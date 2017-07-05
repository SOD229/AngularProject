import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit 
{
  @Input() producto: Producto;
  @Output() onAddCarrito = new EventEmitter<Producto>();
  
  constructor() { }

  ngOnInit() {
  }

  addCarrito(){
    this.onAddCarrito.emit(this.producto);
  }

}
