export class Producto {
    id: number;
    nombre: string;
    precio: number;
    detalle: Detalle;
    urlImagen: string;
}

export class Detalle{
    categoria: number;
    descripcion:string;
    envioGratis:boolean;
    fechaLanzamiento: Date;
    numValoraciones: number;
    valoracion: number;
}