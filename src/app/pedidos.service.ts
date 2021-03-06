import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable()
export class PedidosService {

  pedidos: Pedido[] = new Array<Pedido>();

  constructor() { }

  getPedidos():Pedido[]{
    return this.pedidos;
  }

  addPedido(p : Pedido):void
  {
    let pedido: Pedido;
    let strNombre:string = "";
    let strAp:string = "";
    let strDir:string = "";
    let strArts:string = "";
    let strTotal:string = "";

    this.pedidos.push(p);
    for(let i=0; i<this.pedidos.length-1;i++)
    {
      pedido = this.pedidos[i];
      strNombre = strNombre + pedido.nombre + "|";
      strAp = strAp + pedido.apellidos + "|";
      strDir = strDir + pedido.direccion + "|";
      strArts = strArts + pedido.numArticulos + "|";
      strTotal = strTotal + pedido.total + "|";
    }
    pedido = this.pedidos[this.pedidos.length-1];
    strNombre = strNombre + pedido.nombre;
    strAp = strAp + pedido.apellidos;
    strDir = strDir + pedido.direccion;
    strArts = strArts + pedido.numArticulos;
    strTotal = strTotal + pedido.total;
    localStorage.setItem("nom",strNombre);
    localStorage.setItem("ap",strAp);
    localStorage.setItem("dir",strDir);
    localStorage.setItem("arts",strArts);
    localStorage.setItem("tot",strTotal);
  }

  limpiar() {
    this.pedidos = new Array<Pedido>();
    localStorage.removeItem("nom");
    localStorage.removeItem("ap");
    localStorage.removeItem("dir");
    localStorage.removeItem("arts");
    localStorage.removeItem("tot");
  }

  recover(){
    this.pedidos = new Array<Pedido>();
    let nombres:string[] = new Array<string>();
    let aps:string[] = new Array<string>();
    let dirs:string[] = new Array<string>();
    let arts:number[] = new Array<number>();
    let tots:number[] = new Array<number>();

    let item:string = localStorage.getItem("nom");
    if(item!=null && item!="")
        item.split("|").forEach(elem => nombres.push(elem));
    item = localStorage.getItem("ap");
    if(item!=null && item!="")
        item.split("|").forEach(elem => aps.push(elem));
    item = localStorage.getItem("dir");
    if(item!=null && item!="")
        item.split("|").forEach(elem => dirs.push(elem));
    item = localStorage.getItem("arts");
    if(item!=null && item!="")
        item.split("|").forEach(elem => arts.push(Number(elem)));
    item = localStorage.getItem("tot");
    if(item!=null && item!="")
        item.split("|").forEach(elem => tots.push(Number(elem)));
    for(let i=0; i<nombres.length; i++)
      this.pedidos.push(new Pedido(nombres[i],aps[i],dirs[i],arts[i],tots[i]));
  }

}
