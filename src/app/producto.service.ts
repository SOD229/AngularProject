import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class ProductoService {
  
  constructor(private http:Http){}

    getProductos(){
        return this.http.get('http://academica.uaslp.mx/apps/servicios/tienda/servicio.svc/productos')
        .toPromise().then(resp => resp.json())
        .catch(this.error);
    }

    getProducto(id:number){
      return this.http.get('http://academica.uaslp.mx/apps/servicios/tienda/servicio.svc/productos/'+id)
      .toPromise().then(resp => resp.json())
      .catch(this.error);
    }

    error(){alert("Error leyendo información de http://academica.uaslp.mx");}
}
