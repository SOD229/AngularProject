import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-elemento-pedido',
  templateUrl: './elemento-pedido.component.html',
  styleUrls: ['./elemento-pedido.component.css']
})
export class ElementoPedidoComponent implements OnInit 
{
  @Input() pedido: Pedido;

  constructor() { }

  ngOnInit() {
  }
}
