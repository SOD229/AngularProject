import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[];

  constructor(private pedidosService:PedidosService) { }

  ngOnInit() {
    this.pedidos = this.pedidosService.getPedidos();
  }

  limpiar(){
    this.pedidosService.limpiar();
    this.pedidos = this.pedidosService.getPedidos();
  }
}
