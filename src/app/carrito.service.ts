import { Injectable, Output } from '@angular/core';

@Injectable()
export class CarritoService
{
    elementos: number[] = new Array<number>();
    @Output() total:number = 0;

    constructor(){ }

    getNumElementos():number{
        return this.elementos.length;
    }

    addElemento(id: number, precio: number):void{
        this.total = Number((this.total+precio).toFixed(2));
        this.elementos.push(id);
        localStorage.setItem("c",this.elementos.toLocaleString());
        localStorage.setItem("ct",this.total.toString());
    }

    delElemento(indice: number, precio:number){
        this.elementos.splice(indice,1);
        this.total-=precio;
        this.total = this.total<0? 0 : Number(this.total.toFixed(2));
        localStorage.setItem("c",this.elementos.toLocaleString());
        localStorage.setItem("ct",this.total.toString());
    }

    getCarrito(): number[]{
        return this.elementos;
    }

    recover(){
        this.elementos = new Array<number>();
        let item:string = localStorage.getItem("c");
        if(item!=null && item!="")
            item.split(",").forEach(elem => this.elementos.push(Number(elem)));
        this.total = Number(localStorage.getItem("ct"));
    }

    vaciarCarrito(){
        this.elementos = new Array<number>();
        this.total = 0;
        localStorage.removeItem("c");
        localStorage.removeItem("ct");
    }
}