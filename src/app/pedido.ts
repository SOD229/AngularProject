export class Pedido {
    constructor(nombre:string, apellidos:string, dir:string, numArts:number, total:number){
        this.apellidos = apellidos;
        this.direccion = dir;
        this.nombre = nombre;
        this.numArticulos = numArts;
        this.total = total;
    }

    nombre: string;
    apellidos: string;
    direccion: string;
    numArticulos: number;
    total: number;
}
