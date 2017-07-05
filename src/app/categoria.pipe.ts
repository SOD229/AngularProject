import { Pipe, PipeTransform } from '@angular/core';
import {Producto} from './producto';

@Pipe({
    name: 'pipeCategoria'
})
export class CategoriaPipe implements PipeTransform
{
    transform(value: Producto[], cat: number): any 
    {
        let res: Producto[] = new Array<Producto>();
        if(cat>0)
        {
            value.forEach(prod => {if(prod.detalle.categoria == cat) res.push(prod)});
            return res;
        }
        else
            return value;
    }
}